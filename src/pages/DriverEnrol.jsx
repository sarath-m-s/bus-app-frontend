import React, { useState } from "react";
import InputField from "../components/InputField.jsx";
import { saveDriverData } from "../services/api.js";
import { driverValidateForm } from "../utils/driverValidation.js";

function DriverEnrol() {
  const [driverFormData, setDriverFormData] = useState({
    driverName: "",
    contactNumber: "",
    licenseNumber: "",
    organization: "",
    address: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value: ${value}`);
    setDriverFormData({ ...driverFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Driver form data: ", driverFormData);
    const busValidationResult = driverValidateForm(driverFormData); // Validate form data
    if (!busValidationResult.isValid) {
      setError(busValidationResult.error); // Set validation error if any
      return;
    }

    setError(null); // Reset error state
    const driverData = {
      driver_name: driverFormData.driverName,
      contact_number: driverFormData.contactNumber,
      license_number: driverFormData.licenseNumber,
      organization: driverFormData.organization,
      address: driverFormData.address,
    };

    try {
      await saveDriverData(driverData);
      console.log("Data saved successfully: ", driverData);
    } catch (error) {
      console.error("Error saving data: ", error);
      setError("Error saving data. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="driverName"
          label="Driver Name"
          value={driverFormData.driverName}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="contactNumber"
          label="Contact Number"
          value={driverFormData.contactNumber}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="licenseNumber"
          label="License Number"
          value={driverFormData.licenseNumber}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="organization"
          label="Organization"
          value={driverFormData.organization}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="address"
          label="Address"
          value={driverFormData.address}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default DriverEnrol;
