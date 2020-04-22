import React from 'react';
import Document, { DocumentContext, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <link rel="manifest" href="/manifest.json"></link>
        <meta name="theme-color" content="#f95700" />

        <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"></link>
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_ID}');

            window.fbAsyncInit = function() {
              FB.init({
                appId      : '${process.env.FACEBOOK_APP_ID}',
                cookie     : true,
                xfbml      : true,
                version    : 'v5.0'
              });
              FB.AppEvents.logPageView();
            };
            (function(d, s, id){
               var js, fjs = d.getElementsByTagName(s)[0];
               if (d.getElementById(id)) {return;}
               js = d.createElement(s); js.id = id;
               js.src = "https://connect.facebook.net/en_US/sdk.js";
               fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));

             (function(uid, w, d, s, o, f, js, fjs) {
              w['hoodheroes-widget'] = o;
              w['hh-uid'] = uid;
              w[o] =
                w[o] ||
                function() {
                  (w[o].q = w[o].q || []).push(arguments);
                };
              (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
              js.src = f;
              js.async = 1;
              fjs.parentNode.insertBefore(js, fjs);
            })(25, window, document, 'script', 'hoodhero', 'https://hhtestwidgetstorage.blob.core.windows.net/scripts/standard/widget.bundle.js');
            hoodheroes('init', { type: 'rating', size: 'small' });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
