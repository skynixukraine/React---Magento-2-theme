import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import "./TextLeftImageRightWidget.scss";

export function TextLeftImageRightWidget(props) {
    const { data } = props;

    return (
        <section className="text-left-widget js-hook__text-left-widget">
            <img className="js-hook__text-left-widget-image" src={data.image} alt=""/>
            <div className="js-hook__text-left-widget-description">{ReactHtmlParser(data.text)}</div>
        </section>
    );
}

TextLeftImageRightWidget.propTypes = {};
TextLeftImageRightWidget.defaultProps = {};

export default connect(state => state)(TextLeftImageRightWidget);
