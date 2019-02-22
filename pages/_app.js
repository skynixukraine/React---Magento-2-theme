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

        return (
            <Container>
                <Provider store={store}>
                    <Head>
                        <title>
                            {store.configData
                                ? store.configData
                                      .general_store_information_name
                                : ""}
                        </title>
                        <meta
                            name="viewport"
                            content="initial-scale=1.0, width=device-width"
                            key="viewport"
                        />
                    </Head>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(initializeStore)(MyApp);
