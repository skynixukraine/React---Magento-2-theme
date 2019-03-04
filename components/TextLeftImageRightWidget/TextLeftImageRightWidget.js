import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import "./TextLeftImageRightWidget.scss";

export function TextLeftImageRightWidget(props) {
    const { data } = props;

    return (
        <section className="text-left-widget js-hook__text-left-widget">
            <div className="text-left-widget__content">
                <img className="js-hook__text-left-widget-image text-left-widget__image" src={data.image} alt=""/>
                <div className="js-hook__text-left-widget-description text-left-widget__description">{ReactHtmlParser(data.text)}</div>
            </div>
        </section>
    );
}

TextLeftImageRightWidget.propTypes = {};
TextLeftImageRightWidget.defaultProps = {};

export default connect(state => state)(TextLeftImageRightWidget);
