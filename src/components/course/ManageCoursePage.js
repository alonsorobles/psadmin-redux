import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <h1>Manage Course
            </h1>
        );
    }
}

ManageCoursePage.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps(state, ownProprs) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
