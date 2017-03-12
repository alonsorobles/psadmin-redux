import React from "react";
import {Link, IndexLink} from "react-router";
import LoadingDots from "./LoadingDots";

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="courses" activeClassName="active">Courses</Link></li>
          <li><Link to="about" activeClassName="active">About</Link></li>
          <li><LoadingDots interval={100} dots={20}/></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
