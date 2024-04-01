import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";
import axios from "axios";

const MapLoading = () => {
  const [distance, setDistance] = useState(null);
  const [direction, setDirection] = useState(null);
  const [directions, setDirections] = useState(null);

  const origin = { lat: 37.7749, lng: -122.4194 }; // Replace with your starting point coordinates
  const destination = { lat: 34.0522, lng: -118.2437 }; // Replace with your ending point coordinates

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCCTN2hd3Ovs-yMeKTB0WeYBkMWm14MY7g",
  });

  useEffect(() => {
    const calculateDistanceAndDirection = async () => {
      try {
        const response = await axios.get(
          `https://ydlsd8dk61.execute-api.us-east-1.amazonaws.com/prod/bta/google-maps-wrapper`,
          {
            params: {
              origin_lat: origin.lat,
              origin_lng: origin.lng,
              destination_lat: destination.lat,
              destination_lng: destination.lng,
            },
          }
        );

        const result = response.data;
        const distanceInMeters = result.routes[0].legs[0].distance.value;
        const distanceInKm = distanceInMeters / 1000;
        setDistance(distanceInKm.toFixed(2));
        setDirection(result.routes[0].legs[0].end_address);
        setDirections(result);
      } catch (error) {
        console.error(`error fetching directions ${error}`);
      }
    };

    if (isLoaded) {
      calculateDistanceAndDirection();
    }
  }, [isLoaded]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ height: "400px", width: "100%" }}
      zoom={8}
      center={{
        lat: (origin.lat + destination.lat) / 2,
        lng: (origin.lng + destination.lng) / 2,
      }}
    >
      <Marker position={origin} />
      <Marker position={destination} />
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapLoading;
