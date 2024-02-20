import { useNavigate } from "react-router-dom";
import logo from "../assets/bus.png";
import "../styles/LandingPage.css";

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/login");
  };

  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="bus-trackie">Welcome to Bus Trackie..!!!</h1>
        <p className="description">
            A simple bus tracking application for both drivers and customers.
        </p>
      <button onClick={handleStart}>Get started</button>
    </div>
  );
}

export default Home;
