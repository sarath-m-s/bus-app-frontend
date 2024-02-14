import { useNavigate } from "react-router-dom";
import logo from "../assets/bus.png";
import "../styles/LoginPage.css";

function Home() {
  const navigate = useNavigate();

  const handleDriver = () => {
    navigate("/login/driver");
  };

  const handleCustomer = () => {
    navigate("/customer");
  };

  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Bus Trackie</h1>
      <div className="driver-button">
        <button onClick={handleDriver}>Driver</button>
      </div>
      <div className="customer-button">
        <button onClick={handleCustomer}>Cutomer</button>
      </div>
    </div>
  );
}

export default Home;
