import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authorActions from "../../actions/authorActions";
import AuthorForm from "./AuthorForm";

class ManageAuthorPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <AuthorForm />
        );
    }
}

ManageAuthorPage.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps(state, ownProprs) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
