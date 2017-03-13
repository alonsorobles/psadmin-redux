import React, {PropTypes} from "react";
import {Link, IndexLink} from "react-router";

const Header = ({loading, courseCount, authorCount}) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/courses" activeClassName="active">Courses&nbsp;
            <span className="badge">{courseCount > 0 && courseCount}</span>
          </Link></li>
          <li><Link to="/authors" activeClassName="active">Authors&nbsp;
            <span className="badge">{authorCount > 0 && authorCount}</span>
          </Link></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          {loading &&
          <li>
            <p className="navbar-text">
              <strong className="text-danger">
                <i className="fa fa-refresh fa-spin fa-fw" aria-hidden="true"/> Loading
              </strong>
            </p>
          </li>}
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  courseCount: PropTypes.number.isRequired,
  authorCount: PropTypes.number.isRequired
};

export default Header;
