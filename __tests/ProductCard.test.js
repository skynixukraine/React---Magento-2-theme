import { shallow } from "enzyme";
import React from "react";
import Router from "next/router";
import toJson from "enzyme-to-json";
import ProductCard from "../components/ProductCard/ProductCard";

const mockedRouter = { push: () => {} };
Router.router = mockedRouter;
const product = {
    name: "test-product",
    price: "0"
};

describe("Component ProductCard matches snapshot", () => {
    it("renders page layout correctly", () => {
        const wrapper = shallow(<ProductCard product={product}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe("Component ProductCard", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ProductCard product={product}/>);
    });

    it("renders the dumb component", () => {
        expect(wrapper.length).toEqual(1);
        expect(wrapper.find(".js-hook__product-card-name").length).toBe(1);
        expect(wrapper.find(".js-hook__product-card-price").length).toBe(1);
    });

});