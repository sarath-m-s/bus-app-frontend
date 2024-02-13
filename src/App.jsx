import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import SetData from "./pages/SetData.jsx";
import GetData from "./pages/GetData.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/set" element={<SetData />} />
        <Route path="/get" element={<GetData />} />
      </Routes>
    </Router>
  );
}

export default App;
