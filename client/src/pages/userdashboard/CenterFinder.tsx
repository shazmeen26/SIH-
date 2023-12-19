import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const CenterFinder = () => {
  const [location, setLocation] = useState('');
  const [district, setDistrict] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here based on the selected location and district
    console.log('Searching for centers:', { location, district });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <FaMapMarkerAlt style={styles.icon} />
        <h2 style={styles.title}>Find Centers</h2>
      </div>
      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>State or City:</label>
          <input type="text" placeholder="Enter State or City" value={location} onChange={handleLocationChange} style={styles.input} />
        </div>
        
        <button onClick={handleSearch} style={styles.searchButton}>Search</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: '#000',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px', // Adjusted width
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  icon: {
    fontSize: '24px',
    marginRight: '10px',
  },
  title: {
    fontSize: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  searchButton: {
    padding: '10px',
    fontSize: '16px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default CenterFinder;
