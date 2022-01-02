import Head from 'next/head';

import { GlobalProvider } from 'styles';

import type { AppProps } from 'next/app';
import { Layout } from 'components/layout';

const Blog = ({ Component, pageProps }: AppProps)  => {
  const { locale, ...rest } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/apple-icon-57x57.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/apple-icon-72x72.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/apple-icon-114x114.png" type="image/png" />
        <meta
          name="description"
          content={`Demo Help Center built using Next.js and Contentful Compose.`}
          key="description"
        />
        <title>lazar.sh</title>
      </Head>
      <GlobalProvider>
        <Layout>
          <Component {...rest} />
        </Layout>
      </GlobalProvider>
    </>
  );
}

export default Blog;