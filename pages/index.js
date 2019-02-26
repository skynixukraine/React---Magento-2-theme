import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import { getHomePageData, getConfigData } from "../store/store";
import PageComponent from "../components/Page/Page";

export function Index(props) {
    const { cmsContent } = props;

    return (
        <PageComponent>
            {cmsContent.content_heading ? (
                <h1>{cmsContent.content_heading}</h1>
            ) : null}

            {cmsContent.content && cmsContent.content.length
                ? cmsContent.content.map((data, i) => (
                      <div key={`home${i}`}>
                          <img src={data.image} alt="" />
                          <div>{ReactHtmlParser(data.text)}</div>
                      </div>
                  ))
                : null}
        </PageComponent>
    );
}

Index.getInitialProps = async ({ store }) => {
    const { cmsContent, configData } = store.getState();

    if (!cmsContent) {
        await store.dispatch(getHomePageData());
    }

    if (!configData) {
        await store.dispatch(getConfigData());
    }
};

export default connect(state => state)(Index);

Index.propTypes = {
    cmsContent: PropTypes.object
};
Index.defaultProps = {
    cmsContent: {}
};
