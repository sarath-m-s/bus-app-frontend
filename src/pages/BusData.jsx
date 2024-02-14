import React, { useState } from "react";
import axios from "axios";
import "../styles/BusData.css";

const BusData = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [startingStop, setStartingStop] = useState("");
  const [endingStop, setEndingStop] = useState("");
  const [numIntermediateStops, setNumIntermediateStops] = useState(0);
  const [intermediateStops, setIntermediateStops] = useState([]);

  const handleSubmit = async () => {
    const busData = {
      vehicleNumber,
      startingStop,
      endingStop,
      numIntermediateStops,
      intermediateStops,
    };

    try {
      const response = await axios.post(
        "https://your-api-endpoint.com",
        busData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error writing data to DynamoDB", error);
    }
  };

  const handleIntermediateStopChange = (index, value) => {
    const updatedStops = [...intermediateStops];
    updatedStops[index] = value;
    setIntermediateStops(updatedStops);
  };

  const renderIntermediateStops = () => {
    const stops = [];
    for (let i = 0; i < numIntermediateStops; i++) {
      stops.push(
        <div>
          <h2>Enter intermediate stop {i + 1}</h2>
          <input
            key={i}
            type="text"
            value={intermediateStops[i] || ""}
            onChange={(e) => handleIntermediateStopChange(i, e.target.value)}
            placeholder={`Intermediate Stop ${i + 1}`}
          />
        </div>
      );
    }
    return stops;
  };

  return (
    <div>
      <h2>Enter vehicle number</h2>
      <input
        type="text"
        value={vehicleNumber}
        onChange={(e) => setVehicleNumber(e.target.value)}
      />

      <h2>Enter starting stop</h2>
      <input
        type="text"
        value={startingStop}
        onChange={(e) => setStartingStop(e.target.value)}
      />

      <h2>Enter ending stop</h2>
      <input
        type="text"
        value={endingStop}
        onChange={(e) => setEndingStop(e.target.value)}
      />

      <h2>Enter number of intermediate stops</h2>
      <input
        type="number"
        value={numIntermediateStops}
        onChange={(e) => setNumIntermediateStops(parseInt(e.target.value))}
      />

      {renderIntermediateStops()}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default BusData;
