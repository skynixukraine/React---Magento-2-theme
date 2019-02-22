import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

export function PageComponent(props) {
    const {children} = props;

    return (
        <div>
            <div className="container">{children}</div>
        </div>
    );

}

PageComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
PageComponent.defaultProps = {
    children: null,
};

export default connect(state => state)(PageComponent);
