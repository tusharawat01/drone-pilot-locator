// Function to calculate distance between two coordinates using Haversine formula
export function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }

  
  // Function to filter and sort pilots by work experience and distance
export function filterAndSortPilots(pilots, lat, lon, maxDistanceKm) {
    const filteredPilots = pilots.filter((pilot) => {
      const distance = calculateDistance(lat, lon, pilot.location.coordinates.lat, pilot.location.coordinates.lng);
      return distance <= maxDistanceKm;
    });
  
    filteredPilots.sort((a, b) => b.workExperience - a.workExperience); // Sort by work experience descending
  
    return filteredPilots.slice(0, 10); // Return top 10 pilots
  }
  