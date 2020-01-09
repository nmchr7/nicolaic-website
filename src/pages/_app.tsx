import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import NProgress from '@nmchr7/nprogress';
import { DefaultSeo } from 'next-seo';

import SEO from '../../next-seo.config';
import Layout from '../components/layout';
import { pageview } from '../lib/analytics';

const theme = {
  colors: {
    primary: '#F95700',
    secondary: '#00A4CC',
  },
};

// TODO figure out how to handle this config
// Doesn't feel right having it here
Router.events.on('routeChangeStart', url => {
  NProgress.start();
  pageview(url);
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MainApp extends App {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
    super.componentDidCatch(error, errorInfo);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout title="nicolaic.com">
          <>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </>
        </Layout>
        <style global jsx>{`
          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: #ff6600;

            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;

            width: 100%;
            height: 2px;
          }

          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #ff660060, 0 0 5px #ff660060;
            opacity: 1;

            -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
          }
        `}</style>
      </ThemeProvider>
    );
  }
}
