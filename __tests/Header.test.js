import { shallow } from "enzyme";
import React from "react";
import Router from "next/router";
import toJson from "enzyme-to-json";
import { Header } from "../components/Header/Header";

const mockedRouter = { push: () => {} };
Router.router = mockedRouter;

describe("Component Header matches snapshot", () => {
    it("renders page layout correctly", () => {
        const wrapper = shallow(<Header />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe("Component Header", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it("renders the dumb component", () => {
        expect(wrapper.length).toEqual(1);
        expect(wrapper.find(".js-hook__header").length).toBe(1);
    });

});