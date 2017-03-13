import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseList from "./CourseList";
import {Link} from "react-router";
import toastr from "toastr";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(course) {
    this.props.actions.deleteCourse(course).then(() => {
      toastr.success('The "' + course.title + '" has been deleted.');
    }).catch(error => {
      toastr.error(error);
    });
  }

  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <Link to="course" className="btn btn-primary">Add Course</Link>
        <CourseList courses={courses} onDelete={this.handleDelete}/>
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
