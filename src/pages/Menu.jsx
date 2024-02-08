import React from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const handleSend = () => {
    console.log("Send data to DynamoDB");
    navigate("/set");
  };

  const handleGet = () => {
    console.log("Get data from DynamoDB");
    navigate("/get"); 
  };

  return (
    <div>
      <button onClick={handleSend}>Send</button>
      <button onClick={handleGet}>Receive</button>
    </div>
  );
}

export default Menu;