import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import "./ProductCard.scss";
import { Link } from "../../routes";

export default function ProductCard(props) {
    const {product, className } = props;

    return (
        <Link route={"index-default"}>
            <a className={"js-hook__product-card product-card " +className}>
                <p className="js-hook__product-card-name">{product.name}</p>
                <span className="js-hook__product-card-price">{product.price}</span>
            </a>
        </Link>

    );
}

ProductCard.propTypes = {
    product: PropTypes.object,
    className: PropTypes.string
};
ProductCard.defaultProps = {
    product: {},
    className: ''
};

