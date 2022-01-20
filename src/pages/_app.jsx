import { DefaultSeo } from 'next-seo';

import GlobalStyle from '../styles/global';
import SEO from '../../next-seo.config';
import { GAEvent } from '../lib/analytics';

const isProduction = process.env.NODE_ENV === 'production';

export function reportWebVitals({ id, name, label, value }) {
  if (isProduction) {
    GAEvent({
      action: name,
      category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      label: id,
    });
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
