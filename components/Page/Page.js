import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ErrorPage from "next/error";

export function PageComponent(props) {
    const {children, cmsError} = props;

    if (cmsError) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <div>
            <div className="container js-hook__main-layout">{children}</div>
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
