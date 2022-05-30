import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
  return <div className="h-full"></div>;
};

export const getStaticProps: GetStaticProps = ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../messages/${locale}.json`),
      },
    },
  };
};

export default Home;
