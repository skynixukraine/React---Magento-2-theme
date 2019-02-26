import React from "react";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import Head from "next/head";
import { getConfigData, initializeStore } from "../store/store";

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
            return { pageProps };
        }

        if (!ctx.store.getState().configData) {
            await ctx.store.dispatch(getConfigData(ctx.query.lang));
        }
    }

    render() {
        const { Component, pageProps, store } = this.props;
        const { configData, cmsContent } = store.getState();

        let title = configData ? configData.general_store_information_name : "";
        title =
            cmsContent && cmsContent.title !== undefined
                ? `${cmsContent.title} | ${title}`
                : title;
        const metaDescription = cmsContent ? cmsContent.meta_description : "";
        const metaKeywords = cmsContent ? cmsContent.meta_keywords : "";

        return (
            <Container>
                <Provider store={store}>
                    <Head>
                        <title>{title}</title>
                        <meta
                            name="viewport"
                            content="initial-scale=1.0, width=device-width"
                            key="viewport"
                        />
                        <meta name="description" content={metaDescription} />
                        <meta name="keywords" content={metaKeywords} />
                    </Head>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(initializeStore)(MyApp);
