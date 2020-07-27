import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import "./eachproject.css";

class EachProject extends Component {
  render() {
    const projectProps = this.props.projectProps;
    return (
      <div className="eachproject-cont">
        <div className="row project-header">
          <div
            className={
              this.props.sorted === "categoryName" ? "col-4 sorted" : "col-4"
            }
          >
            Category
          </div>
          <div
            className={
              this.props.sorted === "project_title" ? "col-4 sorted" : "col-4"
            }
          >
            Project Title
          </div>
          <div
            className={
              this.props.sorted === "username" ? "col-4 sorted" : "col-4"
            }
          >
            User Name
          </div>
        </div>
        {projectProps.map((project) => (
          <div key={uuidv4()} className="row project-body">
            <div className="col-4">{project.categoryName}</div>
            <div className="col-4">
              {project.project_title === "" ? "-" : project.project_title}
            </div>
            <div className="col-4">{project.username}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default EachProject;
