import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import { getCmsContent } from "../store/store";
import PageComponent from "../components/Page/Page";

export function Cms(props) {
    const data = props.cmsContent;
    const heading = data.content_heading || data.name || "";

    return (
        <PageComponent layoutType={data.page_layout}>
            <div className="cms-content js-hook__cms-content">
                <h1>{heading}</h1>
                {data.content
                    ? data.content.map((item, i) => (
                          <div key={`cms${i}`}>
                              {ReactHtmlParser(item.text)}
                          </div>
                      ))
                    : null}
            </div>
        </PageComponent>
    );
}

Cms.getInitialProps = async ({ store, query }) => {
    await store.dispatch(getCmsContent(query.urlKey));
};

export default connect(state => state)(Cms);

Cms.propTypes = {
    cmsError: PropTypes.bool,
    cmsContent: PropTypes.object
};
Cms.defaultProps = {
    cmsError: false,
    cmsContent: {}
};
