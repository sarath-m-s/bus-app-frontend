import React from 'react';
import { useLocation } from 'react-router-dom';

const BusDetails = () => {
    const location = useLocation();
    const busId = location.state.busId;

    return (
        <div>
            <h1>Bus Details</h1>
            <p>Bus ID: {busId}</p>
        </div>
    );
};

export default BusDetails;