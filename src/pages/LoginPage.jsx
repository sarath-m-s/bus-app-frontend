import { useNavigate } from "react-router-dom";
import logo from "../assets/bus.png";
import "../styles/LoginPage.css";

function Home() {
  const navigate = useNavigate();

  const handleDriver = () => {
    navigate("/login/driver");
  };

  const handleCustomer = () => {
    navigate("/login/customer");
  };

  return (
    <div className="container">
      <div className="column1">
        <h2>Login as driver</h2>
        <p>
          Are you a bus driver? Login here to enter bus details, update
          schedules, and manage your routes.
        </p>
        <button className="driver-button" onClick={handleDriver}>
          Driver
        </button>
      </div>
      <div className="column2">
        <h2>Login as customer</h2>
        <p>
          Looking for a bus? Login here to search for bus details, check
          schedules, and plan your journey.
        </p>
        <button className="customer-button" onClick={handleCustomer}>
          Customer
        </button>
      </div>
    </div>
  );
}

export default Home;
