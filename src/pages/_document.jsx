import Document, { Head, Html, Main, NextScript } from 'next/document';

const isProduction = process.env.NODE_ENV === 'production';

const GA = `
  window.dataLayer = window.dataLayer || [];
  function gtag () {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
`;

function Script({ src }) {
  return (
    // eslint-disable-next-line react/no-danger
    <script dangerouslySetInnerHTML={{ __html: src }} />
  );
}

export default class MainDocument extends Document {
  render() {
    return (
      <Html>
        <Head/>
      
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
      </Html>
    );
  }
}
