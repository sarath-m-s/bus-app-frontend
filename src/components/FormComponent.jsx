import React, { useState } from "react";
import InputField from "./InputField";
import { validateForm } from "../utils/validation"; // Import the validateForm function

const FormComponent = () => {
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

  const handleSubmit = async () => {
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
        value={formData.registrationNumber}
        onChange={handleChange}
      />
      <InputField
        label="Driver name"
        name="driverName"
        value={formData.registrationNumber}
        onChange={handleChange}
      />
      <InputField
        label="COntact number"
        name="contactNumber"
        value={formData.registrationNumber}
        onChange={handleChange}
      />
      <InputField
        label="License number"
        name="licenseNumber"
        value={formData.registrationNumber}
        onChange={handleChange}
      />
      <InputField
        label="Organization"
        name="organization"
        value={formData.registrationNumber}
        onChange={handleChange}
      />
      <InputField
        label="Address"
        name="address"
        value={formData.registrationNumber}
        onChange={handleChange}
      />
      <InputField
        label="Route starts from"
        name="routeStartsFrom"
        value={formData.registrationNumber}
        onChange={handleChange}
      />
      <InputField
        label="Route ends at"
        name="routeEndsAt"
        value={formData.registrationNumber}
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
          onChange={(e) => handleChangeIntermediateStop(e, index)}
        />
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormComponent;
