import React from "react";
import { useNavigate } from "react-router-dom";

function EnrolMenu() {
  const navigate = useNavigate();

  const handleDriver = () => {
    navigate("/admin/enrol-driver");
  };

  const handleBus = () => {
    navigate("/admin/enrol-bus");
  };

    const handleRoute = () => {
    navigate("/admin/enrol-route");
    };

  return (
    <div>
      <button onClick={handleDriver}>Driver</button>
      <button onClick={handleBus}>Bus</button>
      <button onClick={handleRoute}>Route</button>
    </div>
  );
}

export default EnrolMenu;