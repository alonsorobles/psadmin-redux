import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authorActions from "../../actions/authorActions";
import AuthorForm from "./AuthorForm";

class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: Object.assign({}, props.author)
    };
  }

  render() {
    return (
      <AuthorForm author={this.state.author}/>
    );
  }
}

ManageAuthorPage.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  author: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProprs) {
  let author = {id: '', firstName: '', lastName: ''};
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
