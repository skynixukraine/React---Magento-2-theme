import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCmsPageData, getConfigData } from "../store/store";
import PageComponent from "../components/Page/Page";

export function Home(props) {
    const { cmsContent } = props;

    return (
        <PageComponent>
            <h1>{cmsContent.title}</h1>
            {cmsContent.content.length
                ? cmsContent.content.map((data, i) => (
                      <div key={`home${i}`}>
                          <img src={data.image} alt="" />
                          <div
                              dangerouslySetInnerHTML={{ __html: data.text }}
                          />
                      </div>
                  ))
                : null}
        </PageComponent>
    );
}

Home.getInitialProps = async ({ store }) => {
    const { cmsContent, configData } = store.getState();

    if (!cmsContent) {
        await store.dispatch(getCmsPageData());
    }

    if (!configData) {
        await store.dispatch(getConfigData());
    }
};

export default connect(state => state)(Home);

Home.propTypes = {
    cmsContent: PropTypes.object
};
Home.defaultProps = {
    cmsContent: {}
};
