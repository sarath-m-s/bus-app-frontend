import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/bus.png";

function Home() {
    const history = useHistory();

    const handleStart = () => {
        history.push('/new-page'); // Navigate to new page
    };

    return (
        <div>
            <img src={logo} alt="Logo" className="logo" />
            <h1>Bus Tracking App</h1>
            <button onClick={handleStart}>Start</button>
        </div>
    );
}

export default Home;