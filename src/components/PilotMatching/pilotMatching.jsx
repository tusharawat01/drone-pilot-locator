import React, { useState } from 'react';
import calculateDistance  from '../../utils/calculateDistance.js'; // Import calculateDistance function
import './pilotMatching.css';

const PilotMatching = ({ pilots }) => {
  const [adminLocation, setAdminLocation] = useState({ lat: "", lng: "" });
  const [maxDistanceKm, setMaxDistanceKm] = useState("");
  const [matchedPilots, setMatchedPilots] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');

  const handleCalculateMatch = () => {
    if (!adminLocation.lat || !adminLocation.lng || !maxDistanceKm) {
      alert("Please enter latitude, longitude, and maximum distance.");
      return;
    }

    const filteredPilots = pilots
      .map(pilot => ({
        ...pilot,
        distance: calculateDistance(adminLocation.lat, adminLocation.lng, pilot.location.coordinates.lat, pilot.location.coordinates.lng)
      }))
      .filter(pilot => pilot.distance <= maxDistanceKm)
      .sort((a, b) => b.workExperience - a.workExperience);

      setMatchedPilots(filteredPilots.slice(0, 10));

      if (filteredPilots.length === 0) {
        setSearchMessage('No pilots found in this region.');
      } else {
        setSearchMessage('');
      }
  };

  return (
    <div className='matched'>
      <div className='inputs'>
        <label>Latitude:</label>
        <input
          type="number"
          value={adminLocation.lat}
          onChange={e => setAdminLocation({ ...adminLocation, lat: e.target.value })}
        />
      </div>
      <div className='inputs'>
        <label>Longitude:</label>
        <input
          type="number"
          value={adminLocation.lng}
          onChange={e => setAdminLocation({ ...adminLocation, lng: e.target.value })}
        />
      </div>
      <div className='inputs'>
        <label>Max Distance (km):</label>
        <input
          type="number"
          value={maxDistanceKm}
          onChange={e => setMaxDistanceKm(Number(e.target.value))}
        />
      </div>
      <button className="btn1" onClick={handleCalculateMatch}>Calculate Matches</button>

      {searchMessage && <p className="search-message">{searchMessage}</p>}
      
      <ol>
        {matchedPilots.map((pilot, index) => (
          <li key={index}>
            <h3>{pilot.name}</h3>
            <p>Work Experience: {pilot.workExperience} years</p>
            <p>Distance: {pilot.distance.toFixed(2)} km</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PilotMatching;
