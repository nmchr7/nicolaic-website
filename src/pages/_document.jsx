import Document, { Head, Main, NextScript } from 'next/document';

const isProduction = process.env.NODE_ENV === 'production';

const GA = `
  window.dataLayer = window.dataLayer || [];
  function gtag () {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', ${process.env.NEXT_PUBLIC_GA_ID});
`;

const Script = ({ src }) => {
  // eslint-disable-next-line react/no-danger
  return <script type="text/javascript" dangerouslySetInnerHTML={{ __html: src }} />;
};

export default class MainDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#f95700" />
          <link rel="apple-touch-icon" href="/icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        </Head>
        <body>
          <Main />
          <NextScript />

          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              />

              <Script src={GA} />
            </>
          )}
        </body>
      </html>
    );
  }
}
