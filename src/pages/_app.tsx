import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';

import GlobalStyle from '../style/global';
import SEO from '../../next-seo.config';

const theme = {
  colors: {
    primary: '#F95700',
    secondary: '#00A4CC',
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
