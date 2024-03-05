import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Customer.css";
import { GET_ALL_ROUTE_DETAILS_API_ENDPOINT } from "../helper/constants.js";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [busList, setBusList] = useState([]);
  const [busStops, setBusStops] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/login");
  };

  useEffect(() => {
    const fetchBusStops = async () => {
      try {
        const response = await axios.get(GET_ALL_ROUTE_DETAILS_API_ENDPOINT);
        console.log(response.data);  
        setBusStops(response.data);
      } catch (error) {
        console.error("Error fetching bus stops from DynamoDB", error);
      }
    };
  
    fetchBusStops();
  }, []);

  const handleSubmit = () => {
    const fromStop = busStops.find((busStop) =>
      busStop.stops && busStop.stops.S && busStop.stops.S.find((stop) => stop.M.stopName.S === from)
    );
    const toStop = busStops.find((busStop) =>
      busStop.stops && busStop.stops.S && busStop.stops.S.find((stop) => stop.M.stopName.S === to)
    );
  
    if (
      fromStop &&
      toStop &&
      fromStop.stops && fromStop.stops.S && fromStop.stops.S[0] &&
      toStop.stops && toStop.stops.S && toStop.stops.S[0] &&
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
        <input
          type="text"
          className="form-control"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
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
};

export default Customer;
