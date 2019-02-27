import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ErrorPage from "next/error";
import Layout1Column from "../Layout1Column/Layout1Column";

export function PageComponent(props) {
    const {children, cmsError, layoutType} = props;
    const allLayoutTypes = {Layout1Column}; // Here should be all types of layout components

    if (cmsError) {
        return <ErrorPage statusCode={404}/>;
    }

    if (layoutType) {
        let layoutName = Object.keys(allLayoutTypes).filter(i => i.toLowerCase().includes(layoutType));
        let Layout = allLayoutTypes[layoutName];

        return (
            <Layout>
                {children}
            </Layout>
        )
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
