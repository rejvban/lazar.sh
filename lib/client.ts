import { createClient } from 'contentful';

const configuration = {
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
  previewAccessToken:
    process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
};

const client = createClient({
  space: configuration.space,
  accessToken: configuration.accessToken,
});

const previewClient = createClient({
  space: configuration.space,
  accessToken: configuration.previewAccessToken,
  host: 'preview.contentful.com',
});

const getClient = (type?: string) =>
  type === 'preview' ? previewClient : client;

export { getClient, client, previewClient, configuration };
