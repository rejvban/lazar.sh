import { getClient } from './client';
import type { Document } from '@contentful/rich-text-types';

const preview = process.env.NEXT_PUBLIC_PREVIEW;

export interface BlogPostEntry {
  title: string;
  slug: string;
  content: Document;
  subject: string[];
}

interface GetBlogPostQuery {
  pageContentType?: string;
  slug?: string | string[];
  locale?: string;
  limit?: number;
  include?: number;
}

const getBlogPostQuery = ({
  locale = 'en',
  slug = '',
  pageContentType = 'post',
  limit = 1,
  include = 10,
}: GetBlogPostQuery) => ({
  limit,
  include,
  locale: locale,
  'fields.slug': slug,
  content_type: pageContentType,
});

const getBlogPost = async (params: GetBlogPostQuery) => {
  const query = getBlogPostQuery(params);

  const { items } = await getClient(preview).getEntries<BlogPostEntry>(query);

  return items?.[0] || null;
};

const getBlogPosts = async (params: GetBlogPostQuery) => {
  const query = getBlogPostQuery(params);

  const { items } = await getClient(preview).getEntries<BlogPostEntry>(query);

  return items || [];
};

const getBlogPostSlugs = async () => {
  const { items } = await getClient(preview).getEntries<BlogPostEntry>({
    content_type: 'post',
    select: 'fields.slug',
  });

  return items || [];
};

export { getBlogPost, getBlogPosts, getBlogPostSlugs };
