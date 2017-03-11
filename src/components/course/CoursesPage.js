import React, {PropTypes} from "react";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: ''}
    };
  }

  handleTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  handleClickSave() {

  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input type="text" onChange={this.handleTitleChange} value={this.state.course.title} />
        <input type="submit" value="Save" onClick={this.handleClickSave} />
      </div>
    );
  }
}

export default CoursesPage;
