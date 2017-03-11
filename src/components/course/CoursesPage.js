import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  static courseRow(course, index) {
    return (
      <div key={index}>{course.title}</div>
    );
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: ''}
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
  }

  handleTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  handleClickSave() {
    this.props.createCourse(this.state.course);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(CoursesPage.courseRow)}
        <h2>Add Course</h2>
        <input type="text" onChange={this.handleTitleChange} value={this.state.course.title}/>
        <input type="submit" value="Save" onClick={this.handleClickSave}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  createCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) { // add ownProps as second argument to access router context
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
