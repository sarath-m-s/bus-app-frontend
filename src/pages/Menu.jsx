import React from "react";
import { useHistory } from "react-router-dom";

function Menu() {
  const history = useHistory();

  const handleSend = () => {
    console.log("Send data to DynamoDB");
    history.push("/set");
  };

  const handleGet = () => {
    console.log("Get data from DynamoDB");
    history.push("/get"); 
  };

  return (
    <div>
      <button onClick={handleSend}>Send</button>
      <button onClick={handleGet}>Receive</button>
    </div>
  );
}

export default Menu;
