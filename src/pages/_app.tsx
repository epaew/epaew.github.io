import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { BaseLayout } from '../components/layouts';
import { theme } from '../theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>epaew.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
};

export default MyApp;
