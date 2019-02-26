import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { getCmsPageData, getConfigData } from "../store/store";
import PageComponent from "../components/Page/Page";

export function Index(props) {
    const { cmsContent } = props;

    return (
        <PageComponent>
            <h1>{cmsContent.title}</h1>
            {cmsContent.content && cmsContent.content.length
                ? cmsContent.content.map((data, i) => (
                      <div key={`home${i}`}>
                          <img src={data.image} alt="" />
                          {/* <div */}
                          {/* dangerouslySetInnerHTML={{ __html: data.text }} */}
                          {/* /> */}
                          <div>{parse(data.text)}</div>
                      </div>
                  ))
                : null}
        </PageComponent>
    );
}

Index.getInitialProps = async ({ store }) => {
    const { cmsContent, configData } = store.getState();

    if (!cmsContent) {
        await store.dispatch(getCmsPageData());
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
