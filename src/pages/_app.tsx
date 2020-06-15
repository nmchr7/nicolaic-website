import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';

import '../style/default.css';

import SEO from '../../next-seo.config';

const theme = {
  colors: {
    primary: '#F95700',
    secondary: '#00A4CC',
  },
};

export default ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
