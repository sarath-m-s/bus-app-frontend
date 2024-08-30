import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleMap,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "../styles/Directions.css";

const Directions = ({ origin }) => {
  const navigate = useNavigate();
  const geocoder = useRef(null);
  const directionsService = useRef(null);
  const directionsRenderer = useRef(null);
  const map = useRef(null);
  const distanceMatrixService = useRef(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [destination, setDestination] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    geocoder.current = new window.google.maps.Geocoder();
  }, []);

  const handleLocationSearch = () => {
  if (directionsRenderer.current) {
    directionsRenderer.current.setDirections(null);
  }

  geocoder.current.geocode({ address: inputValue }, (results, status) => {
    if (status === "OK") {
      setDestination({
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng(),
      });
    } else {
      console.error("Geocode was not successful for the following reason: " + status);
    }
  });
};

const handleCurrentLocation = () => {
  if (directionsRenderer.current) {
    directionsRenderer.current.setDirections(null);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setDestination({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};

  useEffect(() => {
    if (
      destination &&
      directionsService.current &&
      directionsRenderer.current &&
      map.current
    ) {
      directionsService.current.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer.current.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );

      distanceMatrixService.current.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [destination],
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status !== "OK") {
            console.error("Error was: " + status);
          } else {
            const distanceResult = response.rows[0].elements[0].distance.text;
            const durationResult = response.rows[0].elements[0].duration.text;
            setDistance(distanceResult);
            setDuration(durationResult);
          }
        }
      );
    }
  }, [destination]);

  const onLoad = (mapInstance) => {
    map.current = mapInstance;
    directionsService.current = new window.google.maps.DirectionsService();
    directionsRenderer.current = new window.google.maps.DirectionsRenderer();
    directionsRenderer.current.setMap(mapInstance);
    distanceMatrixService.current =
      new window.google.maps.DistanceMatrixService();
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleLocationSearch}>Search</button>
      <button onClick={handleCurrentLocation}>Your Location</button>
      <GoogleMap
        id="direction-example"
        mapContainerStyle={{
          height: "400px",
          width: "800px",
        }}
        zoom={7}
        center={origin}
        onLoad={onLoad}
      >
        {directionsRenderer.current && (
          <DirectionsRenderer
            directions={directionsRenderer.current.getDirections()}
          />
        )}
      </GoogleMap>
      <div className="details">
        <h2 className="distance">Distance: {distance}</h2>
        <h2 className="duration">Duration: {duration}</h2>
      </div>
      <div className="back-from-direction">
        <button onClick={() => navigate("/login/customer")}>Back</button>
      </div>
    </div>
  );
};

export default Directions;