import axios from "axios";
import "../styles/Customer.css";
import {
  GET_ALL_ROUTE_DETAILS_API_ENDPOINT,
  GET_ALL_ASSOCIATED_DETAILS_BY_ROUTE_API_ENDPOINT,
  GET_ALL_BUS_DETAILS_API_ENDPOINT,
} from "../helper/constants.js";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Customer = () => {
  const [busStops, setBusStops] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(GET_ALL_ROUTE_DETAILS_API_ENDPOINT)
      .then((response) => setBusStops(response.data))
      .catch((error) => console.error("Error fetching bus stops", error));
  }, []);

  const handleSubmit = async () => {
    const validBuses = busStops.filter(({ stops }) => {
      const stopNames = stops.map(({ stopName }) => stopName);
      const fromIndex = stopNames.indexOf(from);
      const toIndex = stopNames.indexOf(to);
      return fromIndex >= 0 && toIndex >= 0 && fromIndex < toIndex;
    });

    console.log("ValidBuses :", validBuses);

    const associationResponses = await Promise.all(
      validBuses.map(({ route_id }) =>
        axios.get(
          `${GET_ALL_ASSOCIATED_DETAILS_BY_ROUTE_API_ENDPOINT}${route_id}`
        )
      )
    );

    console.log("AssociationResponse:", associationResponses);

    const busIds = associationResponses.flatMap(({ data }) =>
      data.association_id.map(({ bus_id }) => bus_id)
    );

    const { data: buses } = await axios.get(GET_ALL_BUS_DETAILS_API_ENDPOINT);
    const busDetails = buses.filter(({ bus_id }) => busIds.includes(bus_id));

    navigate("/login/customer/bus-list", { state: { busList: busDetails } });
  };

  const uniqueStops = [
    ...new Set(
      busStops.flatMap(({ stops }) => stops.map(({ stopName }) => stopName))
    ),
  ];

  console.log("Unique Stops:", uniqueStops);

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
      <button className="back" onClick={() => navigate("/login")}>
        Back
      </button>
    </div>
  );
};

export default Customer;
