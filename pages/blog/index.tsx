import Head from 'next/head';
import { useState } from 'react';
import { getBlogPosts } from '../../lib/api';
import { PostLink } from '../../components';

import type { BlogPostEntry } from '../../lib/api';
import type { GetStaticProps, NextPage } from 'next/types';
import type { Entry } from 'contentful';

interface PageProps {
  initialPosts: Entry<BlogPostEntry>[];
}

const Blog: NextPage<PageProps> = ({ initialPosts }) => {
  const [posts] = useState<Entry<BlogPostEntry>[]>(initialPosts);

  return (
    <>
      <Head>
        <title>Blog - lazar.sh</title>
      </Head>
      <div>
        {posts.map((item) => (
          <PostLink {...item.fields} key={item.sys.id} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const initialPosts = await getBlogPosts({ locale, limit: 10, include: 10 });

  return {
    props: {
      messages: {
        ...require(`../../messages/${locale}.json`),
      },
      initialPosts,
    },
  };
};

export default Blog;
