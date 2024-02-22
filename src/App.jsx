import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import BusData from "./pages/BusData.jsx";
import Customer from "./pages/Customer.jsx";
// import Location from "./pages/Location.jsx";
import Menu from "./pages/Menu.jsx";
import SetData from "./pages/SetData.jsx";
import GetData from "./pages/GetData.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/driver" element={<BusData />} />
        <Route path="/login/customer" element={<Customer />} />
        {/* <Route path="/login/customer/location" element={<Location />} /> */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/set" element={<SetData />} />
        <Route path="/get" element={<GetData />} />
      </Routes>
    </Router>
  );
}

export default App;
