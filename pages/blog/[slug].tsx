import Head from 'next/head';
import randomColor from 'randomcolor';
import { documentToReactComponents as renderRichText } from '@contentful/rich-text-react-renderer';
import { getBlogPost, getBlogPostSlugs } from '../../lib/api';

import type { BlogPostEntry } from '../../lib/api';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { Entry } from 'contentful';

interface PageProps {
  post: Entry<BlogPostEntry>;
}

const BlogPost: NextPage<PageProps> = ({
  post: {
    fields: { title, subject, content },
  },
}) => {
  return (
    <>
      <Head>
        <title>{title} - lazar.sh</title>
      </Head>
      <div>
        <section>
          <h1 className="font-semibold text-3xl">{title}</h1>
        </section>
        <section className="p-1">
          {subject.map((item) => {
            const backgroundColor = randomColor({ seed: item });

            return (
              <span
                className="mr-1 p-1 text-xs rounded"
                style={{ background: backgroundColor }}
                key={item}
              >
                {item}
              </span>
            );
          })}
        </section>
        <section className="mt-8">{renderRichText(content)}</section>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentfulSlugs = await getBlogPostSlugs();

  const paths = contentfulSlugs.map((contentfulSlug) => ({
    params: { slug: contentfulSlug.fields.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const post = await getBlogPost({
    locale: locale,
    slug: params?.slug,
    pageContentType: 'post',
  });

  return {
    props: {
      messages: {
        ...require(`../../messages/${locale}.json`),
      },
      post,
    },
    notFound: post ? false : true,
    revalidate: 600,
  };
};

export default BlogPost;
