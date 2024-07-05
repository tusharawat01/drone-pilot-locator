import './App.css';
import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import dummyData from './dummyData';
import { divIcon, Icon, point } from 'leaflet';

import icon from './placeholder.png';


function App() {

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

  
  return (
  <MapContainer center = {[28.6139, 77.2088]} zoom = {13}>
    <TileLayer 
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <MarkerClusterGroup 
      chunkedLoading
      iconCreateFunction={customClusterIcon}>
    {dummyData.map((data, index) => (
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
    ))
    }
    </MarkerClusterGroup>
   
  </MapContainer>
  )
}

export default App
