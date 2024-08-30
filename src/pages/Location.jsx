import React, { useEffect } from 'react';
import L from 'leaflet';

function Location() {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add the tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Hardcoded coordinates
    const coord1 = L.latLng(51.505, -0.09);
    const coord2 = L.latLng(52.505, -1.09);

    // Add markers to the map
    L.marker(coord1).addTo(map);
    L.marker(coord2).addTo(map);

    // Calculate and display the distance
    const distance = map.distance(coord1, coord2);
    L.popup()
      .setLatLng(map.getCenter())
      .setContent(`Distance: ${distance} meters`)
      .openOn(map);

    // TODO: Calculate and display the direction and ETA
    
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
}

export default Location;