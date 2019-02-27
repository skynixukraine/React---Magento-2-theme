import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navActive: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.state(state => {
            this.setState({ navActive: !state.navActive });
        });
    }

    render(){
        const { navActive } = this.state;

        return (
            <div className="navigation">
                <div
                    className={
                        navActive ? "navigation__icon navigation__icon--active" : "navigation__icon"
                    }
                    onClick={this.toggleNav}
                    role="presentation"
                >+</div>
                <div className={navActive ? "navigation__content navigation__content--open" : "navigation__content"}>
                    <span>DATA FOR EXAMPLE</span>
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

