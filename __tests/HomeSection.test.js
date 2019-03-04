import { shallow } from "enzyme";
import React from "react";
import Router from "next/router";
import toJson from "enzyme-to-json";
import HomeSection from "../components/HomeSection/HomeSection";

const mockedRouter = { push: () => {} };
Router.router = mockedRouter;

describe("Component HomeSection matches snapshot", () => {
    it("renders page layout correctly", () => {
        const wrapper = shallow(<HomeSection />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe("Component HomeSection", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HomeSection />);
    });

    it("renders the dumb component", () => {
        expect(wrapper.length).toEqual(1);
    });

});