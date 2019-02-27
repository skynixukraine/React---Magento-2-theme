import { shallow } from "enzyme";
import React from "react";
import Router from "next/router";
import toJson from "enzyme-to-json";
import { Layout1Column } from "../components/Layout1Column/Layout1Column";

const mockedRouter = { push: () => {} };
Router.router = mockedRouter;

describe("Component Page matches snapshot", () => {
    it("renders page layout correctly", () => {
        const wrapper = shallow(<Layout1Column />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe("Component Layout1Column", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Layout1Column />);
    });

    it("renders the dumb component", () => {
        expect(wrapper.length).toEqual(1);
    });

    it("contains main blocks", () => {
        expect(wrapper.find(".js-hook__one-col-layout-header").length).toBe(1);
        expect(wrapper.find(".js-hook__one-col-layout-content").length).toBe(1);
        expect(wrapper.find(".js-hook__one-col-layout-footer").length).toBe(1);
    });
});