// MapComponent.jsx

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import pilots from '../../dummyData'; // Import dummy data
import { calculateDistance } from '../../utils/helper.js'; // Import calculateDistance function

const Map = ({ adminLocation }) => {
  const [maxDistanceKm, setMaxDistanceKm] = useState(300); // Default to 300 km

  const filteredPilots = pilots.filter((pilot) => {
    const distance = calculateDistance(adminLocation[0], adminLocation[1], pilot.location.coordinates.lat, pilot.location.coordinates.lng);
    return distance <= maxDistanceKm;
  });

  // Custom icon for admin location marker
  const adminIcon = L.icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

  return (
    <div>
      <label>
        Max Distance (km):
        <input
          type="number"
          value={maxDistanceKm}
          onChange={(e) => setMaxDistanceKm(Number(e.target.value))}
        />
      </label>
      <MapContainer center={[adminLocation[0], adminLocation[1]]} zoom={4} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Render filtered pilots markers with tooltips */}
        {filteredPilots.map((pilot, index) => (
          <Marker key={index} position={[pilot.location.coordinates.lat, pilot.location.coordinates.lng]}>
            <Popup>
              <div>
                <h2>{pilot.name}</h2>
                <img src={pilot.profileImage} alt={pilot.name} style={{ maxWidth: '100px' }} />
                <p>Work Experience: {pilot.workExperience} years</p>
                <p>Location: {pilot.location.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Render admin marker with tooltip */}
        <Marker position={[adminLocation[0], adminLocation[1]]} icon={adminIcon}>
          <Popup>Admin's Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
