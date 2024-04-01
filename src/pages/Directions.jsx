import { useDirections } from "react-google-maps";

const Directions = () => {
  const { response, error } = useDirections({
    // Origin and destination are required.
    origin: "Los Angeles, CA",
    destination: "San Francisco, CA",

    // Optional travel mode.
    travelMode: "DRIVING",

    // Optional waypoints.
    waypoints: [
      {
        location: "Santa Barbara, CA",
        stopover: true,
      },
    ],

    // Optional optimizeWaypoints.
    optimizeWaypoints: true,
  });

  if (error) {
    console.error(error);
    return null;
  }

  if (!response) {
    return null;
  }

  // Render the directions response.
  return (
    <div>
      {/* Display the route on a map. */}
      <Map
        center={response.routes[0].legs[0].start_location}
        zoom={10}
      >
        <DirectionsRenderer directions={response} />
      </Map>

      {/* Display the directions as text. */}
      <ul>
        {response.routes[0].legs[0].steps.map((step, i) => (
          <li key={i}>{step.instructions}</li>
        ))}
      </ul>
    </div>
  );
};

export default Directions;
