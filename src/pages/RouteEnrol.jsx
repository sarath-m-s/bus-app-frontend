import React, { useState } from "react";
import InputField from "../components/InputField.jsx";
import { saveRouteData } from "../services/api.js";
import { routeValidateForm } from "../utils/routeValidation.js";

function RouteEnrol() {
    const [routeFormData, setRouteFormData] = useState({
        routeName: "",
        numOfIntermediateStops: "",
        stops: [],
    });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value: ${value}`);
    setRouteFormData({ ...routeFormData, [name]: value });
  };

const handleIntermediateStopChange = (e) => {
    const num = parseInt(e.target.value, 10);
    if (isNaN(num)) {
        console.error("Invalid number of intermediate stops: ", e.target.value);
        return;
    }
    const stops = new Array(num).fill("");
    setRouteFormData({ ...routeFormData, numOfIntermediateStops: e.target.value, stops });
};

  const handleStopChange = (e, index) => {
    const newStops = [...routeFormData.stops];
    newStops[index] = e.target.value;
    setRouteFormData((prevState) => ({ ...prevState, stops: newStops }));
  };

  const formatStops = (stops) => {
    return stops.map((stop, index) => {
      return {
        stopNumber: index + 1,
        stopName: stop,
      };
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Route form data: ", routeFormData);
    const routeValidationResult = routeValidateForm(routeFormData); // Validate form data
    if (!routeValidationResult.isValid) {
      setError(routeValidationResult.error); // Set validation error if any
      return;
    }

    setError(null); // Reset error state
    const routeData = {
        route_name: routeFormData.routeName,
        number_of_stops: routeFormData.numOfIntermediateStops,
        stops: formatStops(routeFormData.stops)
        };
        console.log("Route data: ", routeData);

    try {
      await saveRouteData(routeData);
      console.log("Data saved successfully: ", routeData);
    } catch (error) {
      console.error("Error saving data: ", error);
      setError("Error saving data. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="routeName"
          label="Route Name"
          value={routeFormData.routeName}
          onChange={handleChange}
        />
        {/* <InputField
          type="text"
          name="routeNumber"
          label="Route Number"
          value={routeFormData.routeNumber}
          onChange={handleChange}
        /> */}
        <InputField
          type="text"
          name="numOfIntermediateStops"
          label="Number of Intermediate Stops"
          value={routeFormData.numOfIntermediateStops}
          onChange={handleIntermediateStopChange}
        />
        {routeFormData.stops.map((stop, index) => {
          return (
            <InputField
              key={index}
              type="text"
              name={`stop-${index}`}
              label={`Stop ${index + 1}`}
              value={stop}
              onChange={(e) => handleStopChange(e, index)}
            />
          );
        })}
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default RouteEnrol;
