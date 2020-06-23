import { DefaultSeo } from 'next-seo';
import * as Sentry from '@sentry/node';

import GlobalStyle from '../style/global';
import SEO from '../../next-seo.config';

Sentry.init({
  enabled: process.env.NODE_ENV === 'production',
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
});

export default ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
    <GlobalStyle />
  </>
);
