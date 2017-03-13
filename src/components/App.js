import React, {PropTypes} from "react";
import Header from "./common/Header";
import {connect} from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header loading={this.props.loading} courseCount={this.props.courses.length} authorCount={this.props.authors.length}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    courses: state.courses,
    authors: state.authors
  };
}

export default connect(mapStateToProps)(App);
