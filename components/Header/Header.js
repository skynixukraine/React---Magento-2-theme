import React from "react";
import PropTypes from "prop-types";
import Navigation from "../Navigation/Navigation";

export default function Header (props) {
    return (
        <div className="header">
            <Navigation/>
        </div>
    );
}

Header.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
Header.defaultProps = {
    children: null,
};

