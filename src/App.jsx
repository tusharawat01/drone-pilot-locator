import React from "react";
import Map from "./components/Map/Map.jsx";
import PilotMatching from "./components/PilotMatching/pilotMatching.jsx";
import dummyData from "./dummyData.js";
import './App.css';


function App() {

 
  return (
    <div className="container">
      <PilotMatching pilots={dummyData} />
      <Map /> 
    </div>
  
  )
}

export default App
