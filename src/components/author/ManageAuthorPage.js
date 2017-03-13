import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authorActions from "../../actions/authorActions";
import AuthorForm from "./AuthorForm";
import toastr from "toastr";

class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: Object.assign({}, this.props.author),
      errors: {},
      saving: false,
      isDirty: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.routerWillLeave = this.routerWillLeave.bind(this);
    this.authorFormIsValid = this.authorFormIsValid.bind(this);
  }

  componentWillMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.author.id != nextProps.author.id) {
      this.setState({author: Object.assign({}, nextProps.author)});
    }
  }

  routerWillLeave() {
    if (this.state.isDirty) {
      return 'Are you sure you want to leave a page? You will lose your changes.';
    }
  }

  handleChange(event) {
    const author = this.state.author;
    const field = event.target.name;
    author[field] = event.target.value;
    const errors =  Object.keys(this.state.errors)
      .filter(key => key !== field)
      .reduce((obj, key) => {
        obj[key] = this.state.errors[key];
        return obj;
      }, {});
    this.setState({author: author, isDirty: true, errors: errors});
  }

  authorFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.author.firstName.length < 3) {
      errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 3) {
      errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  handleSave(event) {
    event.preventDefault();

    if (!this.authorFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveAuthor(this.state.author).then(() => {
      toastr.success('Author saved!');
      this.setState({saving: false, isDirty: false});
      this.redirect();
    }).catch(error => {
      this.setState({saving: false});
      toastr.error(error);
    });
  }

  redirect() {
    this.context.router.push('/authors');
  }

  render() {
    return (
      <AuthorForm author={this.state.author}
                  onChange={this.handleChange}
                  onSave={this.handleSave}
                  saving={this.state.saving}
                  errors={this.state.errors}/>
    );
  }
}

ManageAuthorPage.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  author: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired
};

ManageAuthorPage.contextTypes = {
  router: PropTypes.object
};

function getAuthorById(authors, id) {
  const author = authors.filter(author => author.id == id);
  return author.length ? author[0] : null;
}

function mapStateToProps(state, ownProps) {
  const authorId = ownProps.params.id; // from the path /author/:id

  let author = {id: '', firstName: '', lastName: ''};

  if (authorId && state.authors.length > 0) {
    author = getAuthorById(state.authors, authorId);
  }

  return {
    author: author
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
