import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
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
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input type="text" onChange={this.handleTitleChange} value={this.state.course.title}/>
        <input type="submit" value="Save" onClick={this.handleClickSave}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}



export default connect(mapStateToProps)(CoursesPage);
