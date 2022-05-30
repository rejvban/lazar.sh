import '../styles/globals.css';

import { ThemeProvider } from 'next-themes';
import { MainLayout } from '../layouts/MainLayout';
import { NextIntlProvider } from 'next-intl';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NextIntlProvider messages={pageProps.messages}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </NextIntlProvider>
    </ThemeProvider>
  );
}

export default MyApp;
