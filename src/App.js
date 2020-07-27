import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dashboard from "./components/dashBoard/projDashboard/projectsDashboard";
import Login from "./components/dashBoard/login/login";
import Navbar from "./components/public/navbar/navbar";
import SuccessLogin from "./components/dashBoard/login/successlogin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => <Dashboard {...routeProps} />}
        />
        <Route
          exact
          path="/login"
          render={(routeProps) => <Login {...routeProps} />}
        />
        <Route
          exact
          path="/successlogin"
          render={(routeProps) => <SuccessLogin {...routeProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
