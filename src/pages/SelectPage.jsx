import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you're using axios for API calls
import {
  GET_ALL_BUS_DETAILS_API_ENDPOINT,
  GET_ALL_DRIVER_DETAILS_API_ENDPOINT,
  GET_ALL_ROUTE_DETAILS_API_ENDPOINT,
  ASSOCIATE_API_ENDPOINT,
} from "../helper/constants.js";

function SelectPage() {
  const [enrolledData, setEnrolledData] = useState({
    buses: [],
    drivers: [],
    routes: [],
  });
  const [selectedData, setSelectedData] = useState({
    bus: "",
    driver: "",
    route: "",
  });

  useEffect(() => {
    // Fetch data from the APIs when the component mounts
    axios
      .get(GET_ALL_BUS_DETAILS_API_ENDPOINT)
      .then((res) => setEnrolledData((prev) => ({ ...prev, buses: res.data })));
    axios
      .get(GET_ALL_DRIVER_DETAILS_API_ENDPOINT)
      .then((res) =>
        setEnrolledData((prev) => ({ ...prev, drivers: res.data }))
      );
    axios
      .get(GET_ALL_ROUTE_DETAILS_API_ENDPOINT)
      .then((res) =>
        setEnrolledData((prev) => ({ ...prev, routes: res.data }))
      );
  }, []);

  const handleSelection = (event) => {
    const { name, value } = event.target;
    const parsedValue = JSON.parse(value);
    setSelectedData(prev => ({ ...prev, [name]: parsedValue }));
  };

  const handleSubmit = () => {
    const dataToSubmit = {
      bus_id: selectedData.bus.id,
      driver_id: selectedData.driver.id,
      route_id: selectedData.route.id,
    };
    axios.post(ASSOCIATE_API_ENDPOINT, dataToSubmit)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };
  

  return (
    <div>
      <div>
        <label>Select Bus:</label>
        <select
          name="bus"
          value={JSON.stringify(selectedData.bus)}
          onChange={handleSelection}
        >
          <option disabled value="">
            Select Bus
          </option>
          {enrolledData.buses.map((bus, index) => (
            <option
              key={index}
              value={JSON.stringify({ name: bus.bus_name, id: bus.bus_id })}
            >
              {bus.bus_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Driver:</label>
        <select name="driver" value={JSON.stringify(selectedData.driver)} onChange={handleSelection}>
  <option disabled value="">
    Select Driver
  </option>
  {enrolledData.drivers.map((driver, index) => (
    <option key={index} value={JSON.stringify({ name: driver.driver_name, id: driver.driver_id })}>
      {driver.driver_name}
    </option>
  ))}
</select>
      </div>
      <div>
        <label>Select Route:</label>
        <select name="route" value={JSON.stringify(selectedData.route)} onChange={handleSelection}>
  <option disabled value="">
    Select Route
  </option>
  {enrolledData.routes.map((route, index) => (
    <option key={index} value={JSON.stringify({ name: route.route_name, id: route.route_id })}>
      {route.route_name}
    </option>
  ))}
</select>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SelectPage;
