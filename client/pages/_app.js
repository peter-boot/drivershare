import React from "react";
import App from "next/app";
import ls from "local-storage";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {
      user: {},
      isServer: false
    };

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const isServer = !!ctx.req;

    if (isServer) {
      if (ctx.req.user) {
        console.log(`_app.js:getInitialProps:ctx.req.user \n${JSON.stringify(ctx.req.user, null, 2)} Exists`);
        if (ctx && ctx.req && ctx.req.user) {
          pageProps.user = ctx.req.user;
        }
      }

      if (pageProps && pageProps.isServer) {
        pageProps.isServer = true;
      }
    } else {
      //  get from local storage
      let user;
      try {
        user = ls.get("userInfo");
      } catch (e) {
        user = {};
      }
      if (pageProps) {
        pageProps.user = user;
      }
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const isBrowser = typeof window !== "undefined";

    // this means that we are now running on client but it is first page load, not
    // a redirect to this page
    if (pageProps && pageProps.isServer && isBrowser) {
      ls.set("userInfo", pageProps.user);
    }

    return (
      <Component {...pageProps} />
    );
  }
}
