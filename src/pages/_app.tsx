/* eslint-disable react/jsx-props-no-spreading */

import Layout from '@/components/layout/Layout';
import CityProvider from '@/providers/CityProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CityProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CityProvider>
  );
}
