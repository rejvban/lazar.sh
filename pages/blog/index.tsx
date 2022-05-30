import type { GetStaticProps, NextPage } from 'next/types';

const Blog: NextPage = () => {
  return <div>U izradi</div>;
};

export const getStaticProps: GetStaticProps = ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../../messages/${locale}.json`),
      },
    },
  };
};

export default Blog;
