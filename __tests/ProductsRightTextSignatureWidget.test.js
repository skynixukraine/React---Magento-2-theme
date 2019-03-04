import { shallow } from "enzyme";
import React from "react";
import Router from "next/router";
import toJson from "enzyme-to-json";
import { ProductsRightTextSignatureWidget } from "../components/ProductsRightTextSignatureWidget/ProductsRightTextSignatureWidget";

const mockedRouter = { push: () => {} };
Router.router = mockedRouter;
const data = {
    image: "some-image-url",
    name: "Test Section",
    products: [
        {
            name: "Test",
            price: "0"
        }

    ],
    text: "Test text"
};

describe("Component ProductsRightTextSignatureWidget matches snapshot", () => {
    it("renders page layout correctly", () => {
        const wrapper = shallow(<ProductsRightTextSignatureWidget data={data}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe("Component ProductsRightTextSignatureWidget", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ProductsRightTextSignatureWidget data={data}/>);
    });

    it("renders the dumb component", () => {
        expect(wrapper.length).toEqual(1);
        expect(wrapper.find(".js-hook__right-text-signature-products").length).toBe(1);
        expect(wrapper.find(".js-hook__right-text-signature-text").length).toBe(1);
        expect(wrapper.find(".js-hook__right-text-signature-image").length).toBe(1);
    });

});