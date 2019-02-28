import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Navigation.scss";

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navActive: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState(state => ({navActive: !state.navActive}));
    }

    render(){
        const { navActive } = this.state;

        return (
            <div className="navigation js-hook__navigation">
                <div
                    className={`js-hook__navigation-icon navigation__icon ${navActive ? "navigation__icon--active" : " "}`}
                    onClick={this.toggleNav}
                    role="presentation"
                >+</div>
                <div className={`navigation__content ${navActive ? "navigation__content--open" : ""}`}>
                    <span className="js-hook__navigation-content">DATA FOR EXAMPLE</span>
                </div>
            </div>
        );
    }
}

Navigation.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
Navigation.defaultProps = {
    children: null,
};

