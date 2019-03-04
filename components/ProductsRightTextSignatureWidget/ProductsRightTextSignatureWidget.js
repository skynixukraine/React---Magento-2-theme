import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import "./ProductsRightTextSignatureWidget.scss";
import HomeSection from "../HomeSection/HomeSection";
import ProductCard from "../ProductCard/ProductCard";


export function ProductsRightTextSignatureWidget(props) {
    const { data } = props;

    return (
        <HomeSection classNames="js-hook__right-text-signature right-text-signature-widget">
            {data.products.length ?
                <div className="right-text-signature-widget__products js-hook__right-text-signature-products">
                    {data.products.map((item, i)=>(
                    <ProductCard className="right-text-signature-widget__products-item" product={item} key={"right-text-widget-product"+i}/>
                    ))}
                </div>
                : null}
                <div className="right-text-signature-widget__content">
                    <div className="js-hook__right-text-signature-text">{ReactHtmlParser(data.text)}</div>
                    <img className="js-hook__right-text-signature-image" src={data.image} alt=""/>
                </div>
        </HomeSection>
    );
}

ProductsRightTextSignatureWidget.propTypes = {
    data: PropTypes.object
};
ProductsRightTextSignatureWidget.defaultProps = {
    data: {}
};

export default connect(state => state)(ProductsRightTextSignatureWidget);
