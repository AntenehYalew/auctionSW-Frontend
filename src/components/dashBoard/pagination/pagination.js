import React, { Component } from "react";
import "./pagination.css";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); //run click function
  }
  handleClick(evt) {
    //call the function from dashboard
    evt.preventDefault(); //avoid auto refresh
    this.props.handlePagination(evt.target.value);
  }
  render() {
    const pageNumb = this.props.pageNumbers; //auto addition of page numbers in case of data increment
    return (
      <nav className="pagination-cont">
        <ul className="pagination">
          {pageNumb.map((m) => (
            <li
              key={m}
              className={
                parseInt(this.props.currentPage) === m
                  ? "page-item active-page"
                  : "page-item"
              }
            >
              <button
                value={m}
                onClick={this.handleClick}
                className="page-link"
              >
                {m}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
