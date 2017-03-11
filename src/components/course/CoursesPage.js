import React, {PropTypes} from "react";

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
    alert(`Saving ${this.state.course.title}`);
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

export default CoursesPage;
