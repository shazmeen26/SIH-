import React from 'react';
import backgroundImage from './rehab1.jpg';
import UserMenu from './UserMenu';
import CenterFinder from './CenterFinder';

const UserIntro = () => {
  return (
    <div style={{ ...styles.container, backgroundImage: `url(${backgroundImage})` }}>
      <div style={styles.leftColumn}>
        <div style={styles.content}>
          <h1 style={styles.title}>Government Website</h1>
          <p style={styles.description}>
            Welcome to the official government website. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This website provides valuable information and services for citizens.
          </p>
        </div>
      </div>
      <div style={styles.rightColumn}>
        <CenterFinder />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    borderRadius: '8px',
    marginBottom: '20px',
    color: '#fff',
    display: 'flex',
  },
  leftColumn: {
    flex: 1,
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rightColumn: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
  },
};

export default UserIntro;
