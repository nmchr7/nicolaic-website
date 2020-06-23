import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import * as Sentry from '@sentry/node';

import GlobalStyle from '../style/global';
import SEO from '../../next-seo.config';

Sentry.init({
  enabled: true,
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
});

const theme = {
  colors: {
    primary: '#F95700',
    secondary: '#00A4CC',
  },
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
