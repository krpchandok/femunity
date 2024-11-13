import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
import pickle

mock_data = pd.read_csv('mock_user_data.csv')
clustering_data = mock_data[['age', 'location', 'symptoms']]

symptoms_split = clustering_data['symptoms'].str.get_dummies(sep=', ')
combined_data = pd.concat([clustering_data[['age']], symptoms_split], axis=1)
kmeans = KMeans(n_clusters=5, random_state=42)
kmeans.fit(combined_data)

mock_data['cluster'] = kmeans.labels_

mock_data.to_json('clustered_user_data.json', orient='records', lines=True)

clustered_data = pd.read_json('clustered_user_data.json', orient='records', lines=True)
cluster_0_data = clustered_data[clustered_data['cluster'] == 0]
print(cluster_0_data)

cluster_0_data.to_json('cluster_0_data.json', orient='records', lines=True)

with open("kmeans.pkl", "wb") as f:
    pickle.dump(kmeans, f)