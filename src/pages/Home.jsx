import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/bus.png";

function Home() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/menu');
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