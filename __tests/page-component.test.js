import { shallow } from "enzyme";
import React from "react";
import Router from "next/router";
import toJson from "enzyme-to-json";
import { PageComponent } from "../components/Page/Page";

const mockedRouter = { push: () => {} };
Router.router = mockedRouter;

describe("Component Page matches snapshot", () => {
    it("renders page layout correctly", () => {
        const wrapper = shallow(<PageComponent />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe("Component Page - check component level UI elements", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PageComponent />);
    });

    it("renders the dumb component", () => {
        expect(wrapper.length).toEqual(1);
    });

    it("contains main wrapper block", () => {
        expect(wrapper.find(".js-hook__main-layout").length).toBe(1);
    });
});