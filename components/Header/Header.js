import React, {Component} from "react";
import PropTypes from "prop-types";
import Navigation from "../Navigation/Navigation";
import {connect} from "react-redux";
import translate from "../../translate-maker";
import "./Header.scss";
import {stores} from "../../project.config";
import { actionTypes } from "../../store/store";
import { Router } from "../../routes";


export class Header extends Component {
    constructor(props) {
        super(props);

        this.changeLanguage = this.changeLanguage.bind(this);

    }

    async changeLanguage(ev) {
        let value = ev.target.value;
        await this.props.dispatch({
            type: actionTypes.SET_LOCALE,
            data: value
        });

        if(value !=="default"){
            Router.pushRoute('index', {lang: value})
        } else{
            Router.pushRoute('index-default')
        }
    }

    render() {
        let {locale} = this.props;
        locale = locale ? locale : "default";

        return (
            <div className="header js-hook__header">
                <Navigation/>
                <form action="/catalogsearch/result/">
                    <input name="q" type="text" placeholder={translate[locale].searchLabel} className="js-hook__header-search"/>
                </form>
                <h1 className="js-hook__header-logo-title">{translate[locale].storeTitle}</h1>
                <div>
                    <a href="/customer/account/login" className="js-hook__header-login">{translate[locale].loginBadge}</a>
                    <a href="/customer/account/create" className="js-hook__header-register">{translate[locale].registerBadge}</a>
                    <a href="/checkout/cart" className="js-hook__header-cart">Cart Icon</a>


                    <select name="languages" onChange={this.changeLanguage} defaultValue={locale} className="js-hook__header-languages">
                        {Object.keys(stores).length ? Object.keys(stores).map((lang, i) => {

                            let localeLang = stores[lang].urlPrefix !== '' ? stores[lang].urlPrefix : "en";
                            return <option key={"lang" + i} value={lang}>{localeLang}</option>

                        }): null}
                    </select>
                </div>
            </div>

        )
    }

}

Header.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
Header.defaultProps = {
    children: null,
};

export default connect(state => state)(Header);