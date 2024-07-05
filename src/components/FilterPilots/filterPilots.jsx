// import React from 'react'
// import { useState } from 'react';
// import dummyData from '../dummyData';
// import useGeoLocation from '../hooks/useGeoLocation';

// function filterPilots() {

//     const location = useGeoLocation;

//     const [maxDistanceKm, setMaxDistanceKm] = useState(300); // Default to 300 km
//     const [matchedPilots, setMatchedPilots] = useState([]);
//     const [showMatchedPilots, setShowMatchedPilots] = useState(false);

//     useEffect(() => {
//         const filteredPilots = dummyData
//           .map(pilot => ({
//             ...pilot,
//             distance: calculateDistance(location.coordinates.lat, , pilot.location.coordinates.lat, pilot.location.coordinates.lng)
//           }))
//           .filter(pilot => !filteredDistance || pilot.distance <= filteredDistance)
//           .sort((a, b) => b.workExperience - a.workExperience)
//           .slice(0, 10);
    
//         setMatchedPilots(filteredPilots);
//       }, [adminLocation, filteredDistance]);
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default filterPilots
