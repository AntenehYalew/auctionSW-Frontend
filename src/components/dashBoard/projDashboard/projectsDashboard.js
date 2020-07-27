import React, { Component } from "react";
import axios from "axios";
import EachProject from "../projects/eachProject";
import Pagination from "../pagination/pagination";
import DropdownOptions from "../dropDown/dropDownOptions";
import "./projdashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    //set state
    this.state = {
      projectsData: [],
      currentPage: 1,
      displayPerpage: 2,
      pageNumbers: [],
      defaultSort: "date_added",
    };
    //bind functions
    this.handlePagination = this.handlePagination.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    //call API from backend ans set state for pages numbers and data
    axios.get("/projects").then((response) => {
      const pageNum = [];
      for (
        let i = 1;
        i <= Math.ceil(response.data.length / this.state.displayPerpage);
        i++
      ) {
        pageNum.push(i);
      }
      this.setState({
        projectsData: response.data,
        pageNumbers: pageNum,
      });
    });
  }

  //run pagination function
  handlePagination(listNum) {
    //listNum comes from pagination component
    this.setState({
      currentPage: listNum,
    });
  }

  //sort results based on category, date, name and title
  //sortItem comes from a DropdownOptions component
  handleSort(sortItem) {
    const sortedProjects = this.state.projectsData.sort((prop1, prop2) => {
      if (sortItem !== "date_added") {
        return prop1[sortItem].toUpperCase() > prop2[sortItem].toUpperCase()
          ? 1
          : -1;
      } else {
        // change the dates given in the database to a date Format for an easy comparison
        return new Date(prop1[sortItem]) > new Date(prop2[sortItem]) ? 1 : -1;
      }
    });
    //set new state after sortation
    this.setState({
      projectsData: sortedProjects,
      currentPage: 1,
      defaultSort: sortItem,
    });
  }
  render() {
    const lastPageIdx = this.state.currentPage * this.state.displayPerpage; //find the index of the ietm displayed
    const firstPageIdx = lastPageIdx - this.state.displayPerpage; //calculate the index of the first item displayed
    const displayedPage = this.state.projectsData.slice(
      firstPageIdx,
      lastPageIdx
    );
    return (
      <div className="row dashboard-cont">
        <div className="col-3">
          <DropdownOptions sorting={this.handleSort} />
        </div>
        <div className="col-9">
          <EachProject
            projectProps={displayedPage}
            sorted={this.state.defaultSort}
          />
        </div>
        <Pagination
          handlePagination={this.handlePagination}
          pageNumbers={this.state.pageNumbers}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default Dashboard;
