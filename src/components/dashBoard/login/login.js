import React, { Component } from "react";
import axios from "axios";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    //set state to pass to backend at the time of login
    this.state = {
      userName: "",
      password: "",
      loggedIn: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this); //bind the function
    this.handleUserChange = this.handleUserChange.bind(this); //bind the function
    this.handlepasswordChange = this.handlepasswordChange.bind(this); //bind the function
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { userName, password, loggedIn } = this.state;
    let userData = {
      userName,
      password,
    };
    axios
      .post("http://localhost:3001/login", userData)
      .then((res) => {
        if (res.data.code === 200) {
          localStorage.setItem(
            "token",
            res.data.token
          )((window.location.href = "/SuccessLogin"));
          this.setState({
            loggedIn: true,
          });
        } else {
          this.setState({
            loggedIn: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleUserChange(evt) {
    this.setState({
      userName: evt.target.value,
    });
  }

  handlepasswordChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }
  render() {
    return (
      <div className="login-cont">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleUserChange}
              type="text"
              className="form-control"
              placeholder="User Name"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handlepasswordChange}
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-block submit-btn ">
            Submit
          </button>
        </form>
        <h5>
          {this.state.loggedIn === false && "Wrong user name or password"}
        </h5>
      </div>
    );
  }
}

export default Login;
