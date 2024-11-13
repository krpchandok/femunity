import React from 'react';

const SimilarUsersData = () => {
  // Mock data for similar users
  const users = [
    { name: "Nina", age: 45, location: "Richmond Hill, Canada", symptoms: "Hot flashes, fatigue" },
    { name: "Kirpa", age: 52, location: "Vaughan, Canada", symptoms: "Hot flashes, fatigue, insomnia" },
    { name: "Drishti", age: 57, location: "Toronto, Canada", symptoms: "Hot flashes, fatigue, Joint pain" },
    { name: "Negha", age: 43, location: "Markham, Canada", symptoms: "Joint pain, night sweats, Hot flashes" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Top Matches</h2>
      <ul style={styles.list}>
        {users.map((user, index) => (
          <li key={index} style={styles.card}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Symptoms:</strong> {user.symptoms}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline CSS styles for easy customization
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    fontSize: '24px',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
    maxWidth: '600px'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    marginBottom: '10px',
    fontSize: '16px',
    lineHeight: '1.6'
  }
};

export default SimilarUsersData;
