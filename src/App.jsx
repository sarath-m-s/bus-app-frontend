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
import BusList from "./pages/BusList.jsx";
import BusDetails from "./pages/BusDetails.jsx";
import Directions from "./pages/Directions.jsx";
import { LoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "./helper/constants.js";

function App() {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/location" element={<Location />} />
          <Route path="/login/driver" element={<BusData />} />
          <Route path="/login/customer" element={<Customer />} />
          <Route path="/login/customer/bus-list" element={<BusList />} />
          <Route path="/login/customer/bus/:bus_id" element={<BusDetails />} />
          <Route path="/login/customer/map" element={<MapLoading />} />
          <Route path="/login/customer/geolocation" element={<GeolocationDisplay />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/enrol" element={<EnrolMenu />} />
          <Route path="/admin/enrol/bus" element={<BusEnrol />} />
          <Route path="/admin/enrol/driver" element={<DriverEnrol />} />
          <Route path="/admin/enrol/route" element={<RouteEnrol />} />
          <Route path="/admin/select" element={<SelectPage />} />
          <Route path="/test/directions" element={<Directions />} />
        </Routes>
      </Router>
    </LoadScript>
  );
}

export default App;
