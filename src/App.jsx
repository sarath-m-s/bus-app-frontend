import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import SetData from "./pages/SetData.jsx";
// import GetData from "./pages/GetData";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/set" component={SetData} />
        {/* <Route path="/get" component={GetData} /> */}
      </Switch>
    </Router>
  );
}

export default App;
