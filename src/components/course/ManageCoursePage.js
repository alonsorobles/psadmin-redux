import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseForm from "./CourseForm";
import toastr from "toastr";
import {authorsFormattedForDropDown} from "../../selectors/selectors";

export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false,
      isDirty: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.routerWillLeave = this.routerWillLeave.bind(this);
  }

  componentWillMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  routerWillLeave() {
    if (this.state.isDirty) {
      return 'Are you sure you want to leave a page? You will lose your changes.';
    }
  }

  handleChange(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    const errors =  Object.keys(this.state.errors)
      .filter(key => key !== field)
      .reduce((obj, key) => {
      obj[key] = this.state.errors[key];
      return obj;
    }, {});
    return this.setState({course: course, isDirty: true, errors: errors});
  }

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    if (this.state.course.authorId === '') {
      errors.authorId = 'An author must be selected.';
      formIsValid = false;
    }

    if (this.state.course.category.length < 1) {
      errors.category = 'A category must be specified.';
      formIsValid = false;
    }

    if (/^\d+:[0-5]\d$/.test(this.state.course.length) === false) {
      errors.length = 'Length must be specified as Hours:Minutes. For example: "1:58" specifies 1 hour and 58 minutes.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  handleSave(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course).then(() => {
      toastr.success('Course saved!');
      this.setState({saving: false, isDirty: false});
      this.redirect();
    }).catch(error => {
      this.setState({saving: false});
      toastr.error(error);
    });
  }

  redirect() {
    this.context.router.push('/courses');
  }

  render() {
    return (
      <CourseForm course={this.state.course}
                  errors={this.state.errors}
                  allAuthors={this.props.authors}
                  onChange={this.handleChange}
                  onSave={this.handleSave}
                  saving={this.state.saving}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  route: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course.length) return course[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from the path /course/:id

  let course = {id: '', watchRef: '', title: '', authorId: '', length: '', category: ''};

  if (courseId && state.courses.length > 0) {
    const loadedCourse = getCourseById(state.courses, courseId);
    if (loadedCourse !== null) {
      course = loadedCourse;
    } else {
      ownProps.router.replace("/404");
    }
  }

  return {
    course: course,
    authors: authorsFormattedForDropDown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
