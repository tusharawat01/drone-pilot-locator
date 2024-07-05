// PilotMatchingComponent.jsx

import React, { useState } from 'react';
import pilots  from '../../dummyData'; // Import dummy data from a separate file
import { calculateDistance, filterAndSortPilots } from '../../utils/helper.js'; // Import utility functions

const PilotMatchingComponent = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [maxDistanceKm, setMaxDistanceKm] = useState(1000); // Default to 1000 km

  const handleSearch = () => {
    const matchedPilots = filterAndSortPilots(pilots, latitude, longitude, maxDistanceKm);
    console.log('Matched Pilots:', matchedPilots);
    // Display or use matchedPilots in your UI
  };

  return (
    <div>
      <h2>Pilot Matching</h2>
      <label>
        Latitude:
        <input type="number" value={latitude} onChange={(e) => setLatitude(Number(e.target.value))} />
      </label>
      <br />
      <label>
        Longitude:
        <input type="number" value={longitude} onChange={(e) => setLongitude(Number(e.target.value))} />
      </label>
      <br />
      <label>
        Max Distance (km):
        <input type="number" value={maxDistanceKm} onChange={(e) => setMaxDistanceKm(Number(e.target.value))} />
      </label>
      <br />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default PilotMatchingComponent;
