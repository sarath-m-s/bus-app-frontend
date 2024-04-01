import React, { useEffect, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const Directions = () => {
  const directionsService = useRef(null);
  const directionsRenderer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    const origin = { lat: 10.7677, lng: 76.2764 };
    const destination = { lat: 10.5276, lng: 76.2144 };

    if (
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
    }
  }, []);

  const onLoad = (mapInstance) => {
    map.current = mapInstance;
    directionsService.current = new window.google.maps.DirectionsService();
    directionsRenderer.current = new window.google.maps.DirectionsRenderer();
    directionsRenderer.current.setMap(mapInstance);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCCTN2hd3Ovs-yMeKTB0WeYBkMWm14MY7g">
      <GoogleMap
        id="direction-example"
        mapContainerStyle={{
          height: "400px",
          width: "800px",
        }}
        zoom={7}
        center={{
          lat: 40.748817,
          lng: -73.985428,
        }}
        onLoad={onLoad}
      >
        {directionsRenderer.current && (
          <DirectionsRenderer
            directions={directionsRenderer.current.getDirections()}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Directions;
