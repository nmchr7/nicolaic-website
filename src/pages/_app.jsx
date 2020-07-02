import { DefaultSeo } from 'next-seo';
import * as Sentry from '@sentry/node';

import GlobalStyle from '../style/global';
import SEO from '../../next-seo.config';
import { GAEvent } from '../lib/analytics';

const isProduction = process.env.NODE_ENV === 'production';

Sentry.init({
  enabled: isProduction,
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
});

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

export default ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
    <GlobalStyle />
  </>
);
