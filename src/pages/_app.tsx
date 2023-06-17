import { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';

import '../styles/globals.css';

import SEO from '../../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
