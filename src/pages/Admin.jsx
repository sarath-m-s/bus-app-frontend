import React from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate("/select");
  };

  const handleEnroll = () => {
    navigate("/enroll");
  };

  return (
    <div>
      <button onClick={handleEnroll}>Enroll</button>
      <button onClick={handleSelect}>Select</button>
    </div>
  );
}

export default Admin;
