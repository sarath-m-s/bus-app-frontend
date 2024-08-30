import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/EnrolMenu.css";

function EnrolMenu() {
  const navigate = useNavigate();

  const handleDriver = () => {
    navigate("/admin/enrol/driver");
  };

  const handleBus = () => {
    navigate("/admin/enrol/bus");
  };

  const handleRoute = () => {
    navigate("/admin/enrol/route");
  };

  const handleBack = () => {
    navigate("/admin");
  };

  return (
    <div>
      <div className="enrol-menu-back">
        <button onClick={handleBack}>Back</button>
      </div>
      <div className="enrol-menu-container">
        <div className="new-driver-container">
          <h1>New driver?</h1>
          <p>
            Are you adding a new driver? Click here to provide the driver
            details.
          </p>
          <button onClick={handleDriver}>Driver</button>
        </div>
        <div className="new-bus-container">
          <h1>New bus?</h1>
          <p>
            Are you adding a new bus? Click here to provide the bus details.
          </p>
          <button onClick={handleBus}>Bus</button>
        </div>
        <div className="new-route-container">
          <h1>New route?</h1>
          <p>
            Are you adding a new route? Click here to provide the route details.
          </p>
          <button onClick={handleRoute}>Route</button>
        </div>
      </div>
    </div>
  );
}

export default EnrolMenu;
