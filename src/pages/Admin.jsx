import React from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/admin/select");
  };

  const handleEnroll = () => {
    navigate("/admin/enrol");
  };

  return (
    <div>
      <button onClick={handleEnroll}>Enroll</button>
      <button onClick={handleStart}>Start a trip</button>
    </div>
  );
}

export default Admin;
