import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseForm from "./CourseForm";

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
  }

  render() {
    return (
      <CourseForm course={this.state.course}
                  errors={this.state.errors}
                  allAuthors={[]}
                  />
    );
  }
}

ManageCoursePage.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  course: PropTypes.object
};

function mapStateToProps(state, ownProprs) {
  let course = {id: '', watchRef: '', title: '', authorId: '', length: '', category: ''};
  return {
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
