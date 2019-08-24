import React from 'react';
import App, { Container as NextContainer } from 'next/app';

import BasicLayout from '../components/layout/BasicLayout';

import auth0 from '../services/auth0';

// styles: order is critical
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.

  static async getInitialProps({ Component, router, ctx }) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    let pageProps = {};
    const user = process.browser
      ? await auth0.clientAuth()
      : await auth0.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    let isAuthenticated = false;
    if (user) {
      isAuthenticated = true;
    }
    const auth = { user, isAuthenticated };
    return { pageProps, auth };
  }

  render() {
    // pass page Props into component ? what is page props
    // pass isAuthenticated into base Layout to pass into header

    const { Component, pageProps, auth } = this.props;
    return (
      <NextContainer>
        <BasicLayout auth={auth}>
          <Component {...pageProps} auth={auth} />;
        </BasicLayout>
      </NextContainer>
    );
  }
}

export default MyApp;
