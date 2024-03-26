import React, { useEffect, useState } from "react";
import {
  LoadScript,
  GoogleMap,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const MapLoading = () => {
  const [directions, setDirections] = useState(null);

  const origin = { lat: 37.7749, lng: -122.4194 }; // Hard-coded origin coordinates
  const destination = { lat: 34.0522, lng: -118.2437 }; // Hard-coded destination coordinates

  const directionsOptions = {
    destination: destination,
    origin: origin,
    travelMode: "DRIVING",
  };

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === "OK") {
        setDirections(response);
      } else {
        console.log("Directions request failed:", response.status);
      }
    }
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        zoom={10}
        center={origin}
      >
        {directions && <DirectionsRenderer directions={directions} />}
        <DirectionsService
          options={directionsOptions}
          callback={directionsCallback}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapLoading;
