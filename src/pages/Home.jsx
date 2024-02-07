import React from 'react';
import logo from '../assets/bus.png';

const HomePage = () => {
    return (
        <div>
            <img src={logo} alt="Logo" className='logo' />
            <h1>Bus Tracking App</h1>
            <button>Start</button>
        </div>
    );
};

export default HomePage;