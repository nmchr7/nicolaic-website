import { DefaultSeo } from 'next-seo';

import GlobalStyle from '../styles/global';
import SEO from '../../next-seo.config';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
