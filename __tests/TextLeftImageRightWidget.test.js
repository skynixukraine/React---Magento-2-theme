import { shallow } from "enzyme";
import React from "react";
import Router from "next/router";
import toJson from "enzyme-to-json";
import { TextLeftImageRightWidget } from "../components/TextLeftImageRightWidget/TextLeftImageRightWidget";

const mockedRouter = { push: () => {} };
Router.router = mockedRouter;

const data = {
    image: "some-test-url",
    text: "Test text"
}

describe("Component Navigation matches snapshot", () => {
    it("renders page layout correctly", () => {
        const wrapper = shallow(<TextLeftImageRightWidget data={data} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe("Component TextLeftImageRightWidget", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TextLeftImageRightWidget data={data}/>);
    });

    it("renders the dumb component", () => {
        expect(wrapper.length).toEqual(1);
        expect(wrapper.find(".js-hook__text-left-widget").length).toBe(1);
    });

});