import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import BusData from "./pages/BusData.jsx";
import Customer from "./pages/Customer.jsx";
import Admin from "./pages/Admin.jsx";
import EnrolMenu from "./pages/EnrolMenu.jsx";
// import Select from "./pages/SelectPage.jsx";
// import Enroll from "./pages/EnrollPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/driver" element={<BusData />} />
        <Route path="/login/customer" element={<Customer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/enrol" element={<EnrolMenu />} />
        {/* <Route path="/enroll" element={<Enroll />} /> */}
        {/* <Route path="/select" element={<Select />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
