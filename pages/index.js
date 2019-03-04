import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getHomePageData, getConfigData, actionTypes } from "../store/store";
import PageComponent from "../components/Page/Page";
import TextLeftImageRightWidget from "../components/TextLeftImageRightWidget/TextLeftImageRightWidget";

export function Index(props) {
    const { cmsContent } = props;
    console.log(cmsContent);
    // Add all necessary types of widgets to this array
    const allWidgetTypes = { TextLeftImageRightWidget };

    return (
        <PageComponent layoutType={cmsContent.page_layout}>
            {cmsContent.content_heading ? (
                <h1>{cmsContent.content_heading}</h1>
            ) : null}

            {cmsContent.content && cmsContent.content.length
                ? cmsContent.content.map((data, i) => {
                      if (data.type && allWidgetTypes[data.type]) {
                          const Widget = allWidgetTypes[data.type];
                          return <Widget data={data} key={`widget${i}`} />;
                      }
                      return null;
                  })
                : null}
        </PageComponent>
    );
}

Index.getInitialProps = async ({ store, query }) => {
    const { configData } = store.getState();

    await store.dispatch(getHomePageData());

    if (!configData) {
        await store.dispatch(getConfigData());
    }

    await store.dispatch({
        type: actionTypes.SET_LOCALE,
        data: query.lang
    });
};

export default connect(state => state)(Index);

Index.propTypes = {
    cmsContent: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
Index.defaultProps = {
    cmsContent: {}
};
