import React, { Component } from "react";
import "./dropdown.css";

class DropdownOptions extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this); //bind function
  }
  handleChange(evt) {
    //sorting function passing data to dashboard based on option's value
    let sortItem = evt.target.value;
    this.props.sorting(sortItem);
  }
  render() {
    return (
      <select
        onChange={this.handleChange}
        className="custom-select custom-select-sm select-option"
      >
        <option value="date_added" defaultValue>
          Recent
        </option>
        <option value="categoryName">Category</option>
        <option value="project_title">Project Title</option>
        <option value="username">User</option>
      </select>
    );
  }
}

export default DropdownOptions;
