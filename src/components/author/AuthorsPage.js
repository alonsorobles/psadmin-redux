import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authorActions from "../../actions/authorActions";
import AuthorList from "./AuthorList";
import {Link} from "react-router";
import toastr from "toastr";

class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDelete = this.handleDelete.bind(this);
  }

  authorHasCourses(author) {
    return this.props.courses.filter(course => course.authorId === author.id).length > 0;
  }

  handleDelete(author) {
    if (this.authorHasCourses(author)) {
      toastr.error(author.firstName + ' ' + author.lastName + ' has existing courses and cannot be deleted.');
    } else {
      this.props.actions.deleteAuthor(author).then(() => {
        toastr.success(author.firstName + ' ' + author.lastName + ' has been deleted.');
      }).catch(error => {
        toastr.error(error);
      });
    }
  }

  render() {
    const {authors} = this.props;
    return (
      <div>
        <h1>Authors</h1>
        <Link to="/author" className="btn btn-primary">Add Author</Link>
        {authors.length > 0 && <AuthorList authors={authors} onDelete={this.handleDelete}/>}
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    authors: state.authors,
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
