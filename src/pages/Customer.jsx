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
    const validBuses = busStops.filter((busStop) => {
      const stops = busStop.stops.map((stop) => stop.stopName);
      const fromIndex = stops.indexOf(from);
      const toIndex = stops.indexOf(to);
      return fromIndex >= 0 && toIndex >= 0 && fromIndex < toIndex;
    });

    setBusList(validBuses.map((bus) => bus.route_id));
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
      <table className="table">
        <thead>
          <tr className="table-header">
            <th>Route ID</th>
          </tr>
        </thead>
        <tbody>
          {busList.map((bus, index) => (
            <tr key={index}>
              <td className="table-cell">{bus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customer;
