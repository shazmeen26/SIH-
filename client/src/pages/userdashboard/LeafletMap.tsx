import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  const mapRef = useRef(null);

  // Sample JSON data - replace this with your actual data
  const jsonData = [
    { type: 'Delhi', lat: 28.6139, lng: 77.2090 }, // New Delhi
        { type: 'Maharashtra', lat: 19.0760, lng: 72.8777 }, // Mumbai
        { type: 'West Bengal', lat: 22.5726, lng: 88.3639 }, // Kolkata
        { type: 'Karnataka', lat: 12.9716, lng: 77.5946 }, // Bengaluru
        { type: 'Telangana', lat: 17.3850, lng: 78.4867 }, // Hyderabad
        { type: 'Tamil Nadu', lat: 13.0827, lng: 80.2707 }, // Chennai
        { type: 'Gujarat', lat: 23.0225, lng: 72.5714 }, // Ahmedabad
        { type: 'Uttar Pradesh', lat: 26.8467, lng: 80.9462 }, // Lucknow
        { type: 'Uttar Pradesh', lat: 25.3176, lng: 82.9739 }, // Varanasi
        { type: 'Maharashtra', lat: 18.5204, lng: 73.8567 }, // Pune
        { type: 'Chandigarh', lat: 30.7333, lng: 76.7794 }, // Chandigarh
        { type: 'Goa', lat: 15.2993, lng: 74.1240 }, // Goa
        { type: 'Punjab', lat: 31.6340, lng: 74.8723 }, // Amritsar
        { type: 'Tamil Nadu', lat: 11.0168, lng: 76.9558 }, // Coimbatore
        { type: 'Jammu and Kashmir', lat: 32.7266, lng: 74.8570 }, // Jammu
        { type: 'Gujarat', lat: 21.1702, lng: 72.8311 }, // Surat
        { type: 'Gujarat', lat: 22.3072, lng: 73.1812 }, // Vadodara
        { type: 'Uttar Pradesh', lat: 27.1767, lng: 78.0081 }, // Agra
        { type: 'Rajasthan', lat: 26.9124, lng: 75.7873 }, // Jaipur
        { type: 'Maharashtra', lat: 18.5912, lng: 73.7415 }, // Pimpri-Chinchwad
        { type: 'Jammu and Kashmir', lat: 34.0837, lng: 74.7973 }, // Srinagar
        { type: 'Andhra Pradesh', lat: 16.5062, lng: 80.6480 }, // Vijayawada
        { type: 'Andhra Pradesh', lat: 17.6868, lng: 83.2185 }, // Visakhapatnam
        { type: 'Tamil Nadu', lat: 11.6643, lng: 78.1460 }, // Salem
        { type: 'Puducherry', lat: 11.9416, lng: 79.8083 }, // Puducherry
        { type: 'West Bengal', lat: 22.5726, lng: 88.3639 }, // Howrah
        { type: 'Tamil Nadu', lat: 9.9252, lng: 78.1198 }, // Madurai
        { type: 'Gujarat', lat: 22.4707, lng: 70.0577 }, // Rajkot
        { type: 'Uttar Pradesh', lat: 26.4499, lng: 80.3319 }, // Kanpur
        { type: 'Odisha', lat: 20.2961, lng: 85.8245 }, // Bhubaneswar
        { type: 'Kerala', lat: 9.9312, lng: 76.2673 }, // Kochi
        { type: 'Madhya Pradesh', lat: 23.2599, lng: 77.4126 }, // Bhopal
        { type: 'Haryana', lat: 28.4089, lng: 77.3178 }, // Faridabad
        { type: 'Punjab', lat: 30.9010, lng: 75.8573 }, // Ludhiana
  ];

  useEffect(() => {
    // Check if the map container is not already initialized
    if (!mapRef.current) {
      // Initialize the map on the "map" div
      const newMap = L.map('map').setView([20.5937, 78.9629], 5); // Centered at India
      mapRef.current = newMap;

      // Add a tile layer to add to our map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(newMap);

      // Initially load all markers
      addMarkers('All');
    }
  }, []); // Run useEffect only once on component mount

  // Function to add markers
  const addMarkers = (filterType) => {
    const mapInstance = mapRef.current;

    // Clear existing markers
    mapInstance.eachLayer((layer) => {
      if (!!layer.toGeoJSON) {
        mapInstance.removeLayer(layer);
      }
    });

    // Add new markers based on filter
    jsonData.forEach((item) => {
      if (filterType === 'All' || item.type === filterType) {
        L.marker([item.lat, item.lng])
          .addTo(mapInstance)
          .bindPopup(`Type: ${item.type}`);
      }
    });
  };

  // Function to handle filter change
  const onFilterChange = () => {
    const selectedType = document.getElementById('typeFilter').value;
    addMarkers(selectedType);
  };

  // Add event listener to the filter dropdown
  useEffect(() => {
    document.getElementById('typeFilter')?.addEventListener('change', onFilterChange);

    // Clean up the event listener on component unmount
    return () => {
      document.getElementById('typeFilter')?.removeEventListener('change', onFilterChange);
    };
  }, []); // Run useEffect only once on component mount

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>View All Centers</h1>
      <div id="map" style={{ height: '400px', width: '600px' }}></div>
      <div id="filterContainer">
        <select id="typeFilter">
          <option value="All">All</option>
          <option value="Delhi">New Delhi</option> 
        <option value="West Bengal">KolWest Bengalkata</option> 
        <option value="Karnataka">Bengaluru</option> 
        <option value="Telangana">Hyderabad</option> 
        <option value="Maharashtra">Pune</option> 
        <option value="Chandigarh">Chandigarh</option> 
        <option value="Goa">Goa</option> 
        <option value="Rajasthan">Rajasthan</option> 
        <option value="Maharashtra">Maharashtrad</option>
        <option value="Jammu and Kashmir">Jammu and Kashmir</option> 
        <option value="Andhra Pradesh">Andhra Pradesh</option> 
        <option value="Puducherry">Puducherry</option> 
        <option value="West Bengal">West Bengal</option> 
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option> 
        <option value="Odisha">Odisha</option> 
        <option value="Kerala">Kerala</option> 
        <option value="Madhya Pradesh">Madhya Pradesh</option> 
        <option value="Haryana">Haryana</option> 
        <option value="Punjab">Punjab</option> 
        </select>
      </div>
    </div>
  );
};

export default LeafletMap;
