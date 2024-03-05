import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

function Admin() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/admin/select");
  };

  const handleEnrol = () => {
    navigate("/admin/enrol");
  };

  // const handleBack = () => {
  //   navigate("/login");
  // };

  return (
    <div>
      {/* <div className="admin-back">
        <button onClick={handleBack}>Back</button>
      </div> */}
      <div className="admin-container">
        <div className="enrol-container">
          <h1>Enrolment</h1>
          <p>
            Effortlessly add new buses, drivers, and routes to your system with
            a single click. Use the "Enroll" button to provide details and
            seamlessly integrate them into your operations. This simplifies the
            onboarding process and ensures your data stays up-to-date.
          </p>
          <button onClick={handleEnrol}>Enrol</button>
        </div>
        <div className="select-container">
          <h1>Select</h1>
          <p>
            Before embarking on your trip, take a moment to guarantee a smooth
            and efficient journey. Click the "Select" button below to choose the
            specific bus, driver, and route that best suit your needs. This
            crucial step ensures accurate record-keeping and well-managed trip.
          </p>
          <button onClick={handleStart}>Start a trip</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
