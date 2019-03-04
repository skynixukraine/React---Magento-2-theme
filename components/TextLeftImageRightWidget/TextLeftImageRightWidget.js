import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import "./TextLeftImageRightWidget.scss";
import HomeSection from "../HomeSection/HomeSection"

export function TextLeftImageRightWidget(props) {
    const { data } = props;

    return (
        <HomeSection classNames="text-left-widget js-hook__text-left-widget" contentClass="text-left-widget__content">
            <img className="js-hook__text-left-widget-image text-left-widget__image" src={data.image} alt=""/>
            <div className="js-hook__text-left-widget-description text-left-widget__description">{ReactHtmlParser(data.text)}</div>
        </HomeSection>
    );
}

TextLeftImageRightWidget.propTypes = {
    data: PropTypes.object
};
TextLeftImageRightWidget.defaultProps = {
    data: {}
};

export default connect(state => state)(TextLeftImageRightWidget);
