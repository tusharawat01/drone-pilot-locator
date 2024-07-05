// App.jsx

import React from 'react';
import Map from './components/Map/Map.jsx'; // Import MapComponent
import PilotMatchingComponent from './components/PilotMatching/PilotMatchingComponent.jsx'; // Import PilotMatchingComponent

const App = () => {
  return (
    <div>
      <h1>Drone Pilot Application</h1>
      <Map/> {/* Render the MapComponent */}
      <PilotMatchingComponent /> {/* Render the PilotMatchingComponent */}
    </div>
  );
};

export default App;
