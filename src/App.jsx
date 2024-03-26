import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import BusData from "./pages/BusData.jsx";
import Customer from "./pages/Customer.jsx";
import Admin from "./pages/Admin.jsx";
import EnrolMenu from "./pages/EnrolMenu.jsx";
import BusEnrol from "./pages/BusEnrol.jsx";
import DriverEnrol from "./pages/DriverEnrol.jsx";
import RouteEnrol from "./pages/RouteEnrol.jsx";
import SelectPage from "./pages/SelectPage.jsx";
import Location from "./pages/Location.jsx";
import MapLoading from "./pages/MapLoading.jsx";
import GeolocationDisplay from "./pages/GeoLocationDisplay.jsx";
// import Select from "./pages/SelectPage.jsx";
// import Enroll from "./pages/EnrollPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/location" element={<Location />} />
        <Route path="/login/driver" element={<BusData />} />
        <Route path="/login/customer" element={<Customer />} />
        <Route path="/login/customer/map" element={<MapLoading />} />
        <Route path="/login/customer/geolocation" element={<GeolocationDisplay />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/enrol" element={<EnrolMenu />} />
        <Route path="/admin/enrol/bus" element={<BusEnrol />} />
        <Route path="/admin/enrol/driver" element={<DriverEnrol />} />
        <Route path="/admin/enrol/route" element={<RouteEnrol />} />
        <Route path="/admin/select" element={<SelectPage />} />
        {/* <Route path="/enroll" element={<Enroll />} /> */}
        {/* <Route path="/select" element={<Select />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
