import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  static courseRow(course, index) {
    return (
      <div key={index}>{course.title}</div>
    );
  }

  constructor(props, context) {
    super(props, context);
  }


  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(CoursesPage.courseRow)}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) { // add ownProps as second argument to access router context
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
