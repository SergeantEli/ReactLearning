import React, { Component } from "react";

// Sateless Functional Component
const NavBar = (props) => {
  console.log("NavBar - Rendered");

  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill bg-secondary">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
