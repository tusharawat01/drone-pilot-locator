import './App.css';
import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import dummyData from './dummyData';
import { Icon } from 'leaflet';

import icon from './placeholder.png';

function App() {

  const customIcon = new Icon({
    iconUrl: icon,  //imported icon
    iconSize: [30, 30],  // size of icon
  })
  return (
  <MapContainer center = {[28.6139, 77.2088]} zoom = {13}>
    <TileLayer 
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    {dummyData.map((data, index) => (
        <Marker key={ index }
                position={[ data.location.coordinates.lat, data.location.coordinates.lng ]}
                icon={customIcon}></Marker>
    ))
    }
  </MapContainer>
  )
}

export default App
