import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Menu.css";

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
    <div className="menu-container">
      <div>
        <button onClick={handleSend}>Send</button>
      </div>
      <div>
        <button onClick={handleGet}>Receive</button>
      </div>
    </div>
  );
}

export default Menu;
