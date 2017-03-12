import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../actions/authorActions";
import AuthorList from "./AuthorList";

class AuthorsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
              <h1>Authors</h1>
              <AuthorList />
            </div>
        );
    }
}

AuthorsPage.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps(state, ownProprs) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
