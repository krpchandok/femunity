import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.metrics import pairwise_distances
import json
import sys

# Mock data generation
symptoms_list = [
    "Hot Flashes", "Trouble Sleeping", "Mood Swings", "Night Sweats",
    "Vaginal Dryness", "Memory Problems", "Weight Gain", "Joint Pain", "Urinary Issues"
]

np.random.seed(42)
mock_data = pd.DataFrame({
    'age': np.random.randint(40, 60, size=1000),
    **{symptom: np.random.randint(0, 2, size=1000) for symptom in symptoms_list}
})

kmeans = KMeans(n_clusters=5, random_state=42)
kmeans.fit(mock_data[symptoms_list + ['age']])
mock_data['cluster'] = kmeans.labels_

def preprocess_user_data(age, symptoms, symptoms_list):
    symptoms_data = pd.DataFrame([0] * len(symptoms_list), index=symptoms_list).T
    symptoms_data.loc[0, symptoms] = 1
    symptoms_data['age'] = age
    return symptoms_data

def find_similar_users(age, symptoms, kmeans, user_data, symptoms_list, top_n=5):
    new_user_data = preprocess_user_data(age, symptoms, symptoms_list)
    new_user_cluster = kmeans.predict(new_user_data)[0]
    
    cluster_users = user_data[user_data['cluster'] == new_user_cluster].reset_index(drop=True)
    
    if cluster_users.empty:
        return []  # Return empty list if no users found in cluster

    distances = pairwise_distances(new_user_data, cluster_users.drop(columns=['cluster']), metric='euclidean')[0]
    cluster_users['distance'] = distances
    
    similar_users = cluster_users.nsmallest(top_n, 'distance')
    
    return similar_users.drop(columns=['distance', 'cluster']).to_json(orient='records')

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python cluster.py <age> <symptoms>")
        sys.exit(1)
    
    age = int(sys.argv[1])
    symptoms = sys.argv[2].split(",")
    similar_users_json = find_similar_users(age, symptoms, kmeans, mock_data, symptoms_list, top_n=5)
    print(similar_users_json)
