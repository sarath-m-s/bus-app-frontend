import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  GET_ALL_BUS_DETAILS_API_ENDPOINT,
  GET_ALL_DRIVER_DETAILS_API_ENDPOINT,
  GET_ALL_ROUTE_DETAILS_API_ENDPOINT,
  ASSOCIATE_API_ENDPOINT,
  SAVE_LOCATION_API_ENDPOINT,
} from "../helper/constants.js";
import { useNavigate } from "react-router-dom";
import "../styles/SelectPage.css";

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
  const navigate = useNavigate();

  useEffect(() => {
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
    setSelectedData((prev) => ({ ...prev, [name]: parsedValue }));
  };

  const handleSubmit = () => {
    console.log(selectedData);
    const dataToSubmit = {
      bus_id: selectedData.bus.id,
      driver_id: selectedData.driver.id,
      route_id: selectedData.route.id,
    };
    console.log(dataToSubmit);
    axios
      .post(ASSOCIATE_API_ENDPOINT, dataToSubmit)
      .then((response) => {
        console.log(response);

        // Only send the hardcodedPayload if the first request was successful
        const hardcodedPayload = {
          bus_id: selectedData.bus.id,
          geo_location: {
            lat: "10.55377",
            lng: "76.22359",
          },
        };
        console.log(hardcodedPayload);
        axios
          .post(SAVE_LOCATION_API_ENDPOINT, hardcodedPayload)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  const handleBack = () => {
    navigate("/admin");
}



  return (
    <div>
      <div className="select-container">
        <div>
          <label>Bus:</label>
          <select
            name="bus"
            value={JSON.stringify(selectedData.bus)}
            onChange={handleSelection}
          >
            <option value={JSON.stringify({})} disabled>
              Select Bus
            </option>
            {enrolledData.buses.map((bus, index) => (
              <option
                key={index}
                value={JSON.stringify({
                  name: bus.bus_name,
                  id: bus.bus_id,
                })}
              >
                {bus.bus_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Driver:</label>
          <select
            name="driver"
            value={JSON.stringify(selectedData.driver)}
            onChange={handleSelection}
          >
            <option value={JSON.stringify({})} disabled>
              Select Driver
            </option>
            {enrolledData.drivers.map((driver, index) => (
              <option
                key={index}
                value={JSON.stringify({
                  name: driver.driver_name,
                  id: driver.driver_id,
                })}
              >
                {driver.driver_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Route:</label>
          <select
            name="route"
            value={JSON.stringify(selectedData.route)}
            onChange={handleSelection}
          >
            <option value={JSON.stringify({})} disabled>
              Select Route
            </option>
            {enrolledData.routes.map((route, index) => (
              <option
                key={index}
                value={JSON.stringify({
                  name: route.route_name,
                  id: route.route_id,
                })}
              >
                {route.route_name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="select-button">
        <button onclick={handleBack}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default SelectPage;
