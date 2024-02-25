import React, { useState } from "react";
import InputField from "../components/InputField";
import { validateForm } from "../utils/validation";
import { saveVehicleData, saveDriverData, saveRouteData } from "../services/api";
import "../styles/FormComponent.css";

function FormComponent() {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    privateOrGovernment: "",
    driverName: "",
    contactNumber: "",
    licenseNumber: "",
    organization: "",
    address: "",
    routeStartsFrom: "",
    routeEndsAt: "",
    numOfIntermediateStops: "",
    intermediateStops: [],
  });

  const [error, setError] = useState(null); // State to store validation error

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value: ${value}`);
    setFormData({ ...formData, [name]: value });
  };

  const handleIntermediateStopChange = (e) => {
    const intermediateStops = [];
    const num = parseInt(e.target.value);
    for (let i = 0; i < num; i++) {
      intermediateStops.push("");
    }
    setFormData({ ...formData, intermediateStops });
  };

  const handleStopChange = (e, index) => {
    const newStops = [...formData.intermediateStops];
    newStops[index] = e.target.value;
    setFormData(prevState => ({ ...prevState, intermediateStops: newStops }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationResult = validateForm(formData); // Validate form data
    if (!validationResult.isValid) {
      setError(validationResult.error); // Set validation error if any

      return;
    }

    setError(null); // Reset error state
    const vehicleData = {
      registrationNumber: form.registrationNumber,
      privateOrGovernment: form.privateOrGovernment,
    };

    const driverData = {
      driverName: form.driverName,
      contactNumber: form.contactNumber,
      licenseNumber: form.licenseNumber,
      organization: form.organization,
      address: form.address,
    };

    const routeData = {
      routeStartsFrom: form.routeStartsFrom,
      routeEndsAt: form.routeEndsAt,
      numberOfIntermediateStops: form.numberOfIntermediateStops,
      intermediateStops: form.intermediateStops,
    };

    try {
      await saveVehicleData(vehicleData);
      await saveDriverData(driverData);
      await saveRouteData(routeData);
      // Reset form or show success message
    } catch (error) {
      console.error("Error saving data: ", error);
      setError("Error saving data. Please try again.");
    }
  };

  return (
    <div>
      <InputField
        label="Registration number"
        name="registrationNumber"
        value={formData.registrationNumber}
        onChange={handleChange}
      />
      <InputField
        label="Private or Government"
        name="privateOrGovernment"
        value={formData.privateOrGovernment}
        onChange={handleChange}
      />
      <InputField
        label="Driver name"
        name="driverName"
        value={formData.driverName}
        onChange={handleChange}
      />
      <InputField
        label="Contact number"
        name="contactNumber"
        value={formData.contactNumber}
        onChange={handleChange}
      />
      <InputField
        label="License number"
        name="licenseNumber"
        value={formData.licenseNumber}
        onChange={handleChange}
      />
      <InputField
        label="Organization"
        name="organization"
        value={formData.organization}
        onChange={handleChange}
      />
      <InputField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <InputField
        label="Route starts from"
        name="routeStartsFrom"
        value={formData.routeStartsFrom}
        onChange={handleChange}
      />
      <InputField
        label="Route ends at"
        name="routeEndsAt"
        value={formData.routeEndsAt}
        onChange={handleChange}
      />

      <InputField
        label="Number of intermediate stops"
        name="numOfIntermediateStops"
        value={formData.numOfIntermediateStops}
        onChange={handleIntermediateStopChange}
      />

      {/* Dynamically render intermediate stop input fields */}
      {formData.intermediateStops.map((stop, index) => (
        <InputField
          key={index}
          label={`Intermediate Stop ${index + 1}`}
          value={stop}
          onChange={(e) => handleStopChange(e, index)}
        />
      ))}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormComponent;
