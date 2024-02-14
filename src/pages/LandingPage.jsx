import { useNavigate } from "react-router-dom";
import logo from "../assets/bus.png";
import '../styles/LandingPage.css';

function Home() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/login');
    };

    return (
        <div className="home-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Bus Trackie</h1>
      <button onClick={handleStart}>Begin</button>
    </div>
    );
}

export default Home;