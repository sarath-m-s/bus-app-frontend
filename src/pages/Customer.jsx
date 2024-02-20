import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Customer.css";
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
        const response = await axios.get("https://your-api-endpoint.com");
        setBusStops(response.data);
      } catch (error) {
        console.error("Error fetching bus stops from DynamoDB", error);
      }
    };

    fetchBusStops();
  }, []);

  const handleSubmit = () => {
    const filteredBuses = busStops.filter(
      (busStop) => busStop === from || busStop === to
    );
    setBusList(filteredBuses);
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
      <button className="back" onClick={handleBack}>Back</button>
      <ul>
        {busList.map((bus, index) => (
          <li key={index}>{bus}</li>
        ))}
      </ul>
    </div>
  );
};

export default Customer;
