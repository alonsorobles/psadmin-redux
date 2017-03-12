import React, {PropTypes} from "react";
import {Link, IndexLink} from "react-router";

const Header = ({loading}) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/courses" activeClassName="active">Courses</Link></li>
          <li><Link to="/authors" activeClassName="active">Authors</Link></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          {loading && <li><p className="navbar-text"><i className="fa fa-refresh fa-spin fa-fw" aria-hidden="true"/> Loading</p></li>}
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
