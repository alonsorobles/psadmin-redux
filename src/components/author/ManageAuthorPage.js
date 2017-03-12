import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authorActions from "../../actions/authorActions";
import AuthorForm from "./AuthorForm";

class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: Object.assign({}, this.props.author),
      errors: {},
      saving: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.author.id != nextProps.author.id) {
      this.setState({author: Object.assign({}, nextProps.author)});
    }
  }

  handleChange(event) {
    const author = this.state.author;
    author[event.target.name] = event.target.value;
    this.setState({author: author});
  }

  handleSave(event) {
    event.preventDefault();
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
  author: PropTypes.object.isRequired
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
