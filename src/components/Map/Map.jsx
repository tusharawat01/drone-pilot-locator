import './Map.css';
import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import dummyData from '../../dummyData.js';
import { divIcon, Icon, point } from 'leaflet';

import icon from './icon.png';

import useGeoLocation from '../../hooks/useGeoLocation.js';
import calculateDistance from '../../utils/calculateDistance.js';
import React, {useState} from 'react';


function Map() {
  const [filteredPilots, setFilteredPilots] = useState(dummyData);
  const [filterDist, setFilterDist] = useState("100");
  const location = useGeoLocation();

  const customIcon = new Icon({
    iconUrl: icon,  //imported icon
    iconSize: [30, 30],  // size of icon
  })

  const customClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(40, 40, true)
    });
  }

  const handleNearestPilots = () => {

    if (!location.loaded) {
      alert('Location data is not available yet.');
      return;
    }

    const filtered = dummyData
      .map(pilot => ({
        ...pilot,
        distance: calculateDistance(
          location.cordinates.lat,
          location.cordinates.lng,
          pilot.location.coordinates.lat,
          pilot.location.coordinates.lng
        ),
      }))
      .filter(pilot => pilot.distance <= filterDist);

    setFilteredPilots(filtered);
  };

  const handleAllPilots = () => {
    setFilteredPilots(dummyData)
  }


  return (
    <div className='controls'>
    
    <MapContainer center = {[28.7041, 77.1025]} zoom = {13}>

    <button className='btn' onClick={handleNearestPilots}>Nearest Pilots</button>
    <button className='btn' onClick={handleAllPilots}>All Pilots</button>
    <div className='input'>
          <label htmlFor="distance-filter">Distance (km):</label>
          <input
            id="distance-filter"
            type="number"
            value={filterDist}
            placeholder='100'
            onChange={(e) => setFilterDist(Number(e.target.value))}
          />
        </div>

    <TileLayer 
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />  
    <MarkerClusterGroup 
      chunkedLoading
      iconCreateFunction={customClusterIcon}>
      {filteredPilots.map((data, index) => (
        <Marker key={ index }   
                position={[ data.location.coordinates.lat, data.location.coordinates.lng ]}
                icon={customIcon}>
          <Popup >
            <div>
              <h2>{data.name}</h2>
              <img src={data.profileImage} alt={data.name} style={{ maxWidth: '100px' }} />
              <p>Work Experience: {data.workExperience} years</p>
              <p>Location: {data.location.address}</p>
            </div>
          </Popup>
        </Marker>
    ))}
    </MarkerClusterGroup> 
    {location.loaded && !location.error && (
          <Marker position={[location.cordinates.lat, location.cordinates.lng]}>
            <Popup>
              <div>
                <h2>Admin's Location</h2>
                <p>Latitude: {location.cordinates.lat}</p>
                <p>Longitude: {location.cordinates.lng}</p>
              </div>
            </Popup>
          </Marker>
        )}
  </MapContainer>
  </div>
      
  )
}

export default Map;