import axios from "axios";
import "../styles/Customer.css";
import { GET_ALL_ROUTE_DETAILS_API_ENDPOINT } from "../helper/constants.js";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Customer() {
  const [busStops, setBusStops] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [busList, setBusList] = useState([]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/login");
  };

  useEffect(() => {
    const fetchBusStops = async () => {
      try {
        const response = await axios.get(GET_ALL_ROUTE_DETAILS_API_ENDPOINT);
        setBusStops(response.data);
      } catch (error) {
        console.error("Error fetching bus stops", error);
      }
    };

    fetchBusStops();
  }, []);

  const getUniqueStops = () => {
    const stops = busStops.flatMap((busStop) =>
      busStop.stops.map((stop) => stop.stopName)
    );
    return [...new Set(stops)];
  };

  const uniqueStops = getUniqueStops();

  const handleSubmit = () => {
    const fromStop = busStops.find(
      (busStop) =>
        busStop.stops &&
        busStop.stops.S &&
        busStop.stops.S.find((stop) => stop.M.stopName.S === from)
    );
    const toStop = busStops.find(
      (busStop) =>
        busStop.stops &&
        busStop.stops.S &&
        busStop.stops.S.find((stop) => stop.M.stopName.S === to)
    );

    if (
      fromStop &&
      toStop &&
      fromStop.stops &&
      fromStop.stops.S &&
      fromStop.stops.S[0] &&
      toStop.stops &&
      toStop.stops.S &&
      toStop.stops.S[0] &&
      Number(fromStop.stops.S[0].M.stopNumber.N) <
        Number(toStop.stops.S[0].M.stopNumber.N)
    ) {
      setBusList([fromStop.route_id.S]);
    } else {
      setBusList([]);
    }
  };

  return (
    <div className="customer-container">
      <h1>Where is my bus..?</h1>
      <p>Search for buses</p>
      <div className="form-group">
        <select
          className="form-control"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          <option value="">Select From</option>
          {uniqueStops.map((stop, index) => (
            <option key={index} value={stop}>
              {stop}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <select
          className="form-control"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          <option value="">Select To</option>
          {uniqueStops.map((stop, index) => (
            <option key={index} value={stop}>
              {stop}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
      <button className="back" onClick={handleBack}>
        Back
      </button>
      <ul>
        {busList.map((bus, index) => (
          <li key={index}>{bus}</li>
        ))}
      </ul>
    </div>
  );
}

export default Customer;
