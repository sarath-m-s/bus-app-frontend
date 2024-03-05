import React, { useState } from "react";
import InputField from "../components/InputField.jsx";
import { saveBusData } from "../services/api.js";
import { busValidateForm } from "../utils/busValidation.js";
import "../styles/BusEnrol.css";
import { useNavigate } from "react-router-dom";

function BusEnrol() {
  const [busFormData, setbusFormData] = useState({
    busName: "",
    registrationNumber: "",
    privateOrGovernment: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value: ${value}`);
    setbusFormData({ ...busFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const busValidationResult = busValidateForm(busFormData); // Validate form data
    if (!busValidationResult.isValid) {
      setError(busValidationResult.error); // Set validation error if any
      return;
    }

    setError(null); // Reset error state
    const busData = {
      bus_name: busFormData.busName,
      registration_number: busFormData.registrationNumber,
      bus_type: busFormData.privateOrGovernment,
    };
    try {
      await saveBusData(busData);
      console.log("Data saved successfully: ", busData);
    } catch (error) {
      console.error("Error saving data: ", error);
      setError("Error saving data. Please try again.");
    }

    navigate("/admin/select");
  };

  const handleBack = () => {
    navigate("/admin/enrol");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="busName"
          label="Bus Name"
          value={busFormData.busName}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="registrationNumber"
          label="Registration Number"
          value={busFormData.registrationNumber}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="privateOrGovernment"
          label="Private or Government"
          value={busFormData.privateOrGovernment}
          onChange={handleChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="bus-enrol-container">
          <button type="reset" onClick={handleBack}>Back</button>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default BusEnrol;
