import React, { Component } from "react";

class SuccessLogin extends Component {
  render() {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    } else {
      return <div>Succesfully Logged in</div>;
    }
  }
}

export default SuccessLogin;
