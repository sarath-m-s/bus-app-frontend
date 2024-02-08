import React, { useState } from "react";

function BusData() {
  const [bus_id, setBusId] = useState("");
  const [busData, setBusData] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://htnglwbkd1.execute-api.us-east-1.amazonaws.com/prod/bta/get/geo-location?bus_id=${bus_id}`
      );
      const data = await response.json();
      setBusData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={bus_id}
        onChange={(e) => setBusId(e.target.value)}
      />
      <button onClick={fetchData}>Get Bus Data</button>
      <div>{busData}</div>
    </div>
  );
}

export default BusData;
