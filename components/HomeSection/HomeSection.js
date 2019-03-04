import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import "./HomeSection.scss";

export default function HomeSection(props) {
    const { children, classNames, contentClass } = props;

    return (
        <section className={"home-section "+classNames}>
            <div className={"home-section__content "+contentClass}>
                {children}
            </div>
        </section>
    );
}

HomeSection.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    classNames: PropTypes.string,
    contentClass: PropTypes.string
};
HomeSection.defaultProps = {
    children: {},
    classNames: '',
    contentClass: ''
};

