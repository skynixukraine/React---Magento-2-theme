import { shallow } from "enzyme";
import React from "react";
import Router from "next/router";
import toJson from "enzyme-to-json";
import { Navigation } from "../components/Navigation/Navigation";

const mockedRouter = { push: () => {} };
Router.router = mockedRouter;

describe("Component Navigation matches snapshot", () => {
    it("renders page layout correctly", () => {
        const wrapper = shallow(<Navigation />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe("Component Navigation", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Navigation />);
    });

    it("renders the dumb component", () => {
        expect(wrapper.length).toEqual(1);
        expect(wrapper.find(".js-hook__navigation").length).toBe(1);
    });

});