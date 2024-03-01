import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you're using axios for API calls
import {
  GET_ALL_BUS_DETAILS_API_ENDPOINT,
  GET_ALL_DRIVER_DETAILS_API_ENDPOINT,
  GET_ALL_ROUTE_DETAILS_API_ENDPOINT,
  ASSOCIATE_API_ENDPOINT
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

  const handleSelection = (e) => {
    setSelectedData({ ...selectedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post(ASSOCIATE_API_ENDPOINT, selectedData);
  };

  return (
    <div>
      <h2>Select Page</h2>
      <div>
        <label>Select Bus:</label>
        <select name="bus" onChange={handleSelection}>
          <option disabled selected>
            Select Bus
          </option>
          {enrolledData.buses.map((bus, index) => (
            <option key={index} value={bus.bus_name}>
              {bus.bus_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Driver:</label>
        <select name="driver" onChange={handleSelection}>
          <option disabled selected>
            Select Driver
          </option>
          {enrolledData.drivers.map((driver, index) => (
            <option key={index} value={driver.driver_name}>
              {driver.driver_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Route:</label>
        <select name="route" onChange={handleSelection}>
          <option disabled selected>
            Select Route
          </option>
          {enrolledData.routes.map((route, index) => (
            <option key={index} value={route.route_name}>
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
