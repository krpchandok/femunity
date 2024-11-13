import React from 'react';
import Navbar from './components/navbar';
import MyMap from './components/map';
import SimilarUsersData from './components/SimilarUsersBox';
import { Button } from './components/ui/button';

function SimilarUsers() {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0 }}>
      <Navbar />
      <h1 className="font-semibold text-[20px] my-5 text-center">
        Here are some nearby people experiencing a similar situation! Click on a marker if you would like to chat. If you would prefer to talk anonymously, visit the
        <Button className='bg-transparent text-black font-semibold text-[20px]'>
            forum.
        </Button>
      </h1>

      <div style={styles.container}>
        <div style={styles.mapContainer}>
          <MyMap />
        </div>
        <div style={styles.userListContainer}>
          <SimilarUsersData />
        </div>
      </div>
    </div>
  );
}

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center', // Adjust for Navbar and title height
      padding: '0 50px',
    },
    mapContainer: {
      flex: 2,
      height: '100%',
      marginRight: '20px',
      backgroundColor: '#FCCCC0',
      padding: '10px',
      borderRadius: '8px',
      display: 'flex',           // Ensures child (map) can grow within
      justifyContent: 'center',
      alignItems: 'center',
    },
    userListContainer: {
      flex: 1,
      padding: '20px',
      backgroundColor: '#f5f5f5',
      overflowY: 'auto',
      borderRadius: '8px',
    },
  };
  

export default SimilarUsers;
