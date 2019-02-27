import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

export function Layout1Column(props) {
    const {children} = props;
    return (
            <div className="container js-hook__one-col-layout">
                {children}
                <div className="layout-column1__header js-hook__one-col-layout-header"></div>
                <div className="layout-column1__content js-hook__one-col-layout-content"></div>
                <div className="layout-column1__footer js-hook__one-col-layout-footer"></div>
            </div>
    );

}

Layout1Column.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
Layout1Column.defaultProps = {
    children: null,
};

export default connect(state => state)(Layout1Column);
