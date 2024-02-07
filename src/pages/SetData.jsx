import logo from "../assets/bus.png";
import { useState } from "react";

function SetData() {
  const [payload, setPayload] = useState("");

  const sendDataToDynamoDB = () => {
    fetch(
      "https://4y8ta28zd9.execute-api.us-east-1.amazonaws.com/prod/bta/save/geo-location",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <>
      <img src={logo} alt="Logo" className="logo" />
      <h1>Track Bus</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the payload.."
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
        />
      </div>
      <div>
        <button onClick={sendDataToDynamoDB}>Send</button>
      </div>
    </>
  );
}

export default SetData;
