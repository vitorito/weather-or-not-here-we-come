/* eslint-disable react/jsx-props-no-spreading */

import Layout from '@/components/layout/Layout';
import RecentSearchesProvider from '@/providers/RecentSearchesProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecentSearchesProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecentSearchesProvider>
  );
}
