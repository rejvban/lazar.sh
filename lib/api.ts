import { createClient } from 'contentful';

import type { TypePostFields } from './types';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN || '',
});

const previewClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
    host: 'preview.contentful.com',
});

const getClient = (preview: boolean = false) => (preview ? previewClient : client);

type GetPageParams = {
    preview?: boolean;
    order?: 'sys.createdAt';
    limit?: number;
}

export const getPosts = async (params: GetPageParams) => {
    try {
        const resp = await getClient(params.preview).getEntries<TypePostFields>({ order: params?.order, limit: params?.limit });

        return resp ? resp : null;
    } catch(e) {
        console.error('[ERROR-1] Failed to fetch posts!', e);
        return null;
    }
}

