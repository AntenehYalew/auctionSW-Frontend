import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <NavLink exact className="navbar-brand" to="/">
            Navbar
          </NavLink>
          {!localStorage.getItem("token") ? (
            <NavLink exact className="navbar-brand navbar-log" to="/login">
              Log in
            </NavLink>
          ) : (
            <NavLink
              onClick={this.handleLogout}
              exact
              className="navbar-brand navbar-log"
              to="/"
            >
              Log out
            </NavLink>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
