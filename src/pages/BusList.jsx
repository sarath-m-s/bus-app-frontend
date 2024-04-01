import { useNavigate, useLocation } from "react-router-dom";

const BusList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const busList = location.state.busList;

    const handleBusClick = (bus) => {
        navigate(`/login/customer/bus/${bus.bus_id}`, { state: { busId: bus.bus_id } });
    };

    return (
        <div>
            {busList.map((bus, index) => (
                <button key={index} onClick={() => handleBusClick(bus)}>
                    {bus.bus_name}
                </button>
            ))}
        </div>
    );
};

export default BusList;