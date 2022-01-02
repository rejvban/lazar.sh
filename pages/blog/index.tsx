import { Post } from 'components/post';

import { BlogContainer } from './index.styled';

import { getPosts } from 'lib/api';

import type { GetStaticProps, NextPage } from 'next';
import type { EntryCollection } from 'contentful';
import type { TypePostFields } from 'lib/types';

interface BlogProps {
    posts: EntryCollection<TypePostFields> | null;
}

const Blog: NextPage<BlogProps> = ({ posts }) => {

    if (!posts) {
        return <div>Looks like nothing has been posted yet!</div>
    }
    console.log(posts);

    return (
        <BlogContainer>
            {posts.items.map(item => (
                <Post key={item.sys.id} {...item} />
            ))}
        </BlogContainer>
    )
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const posts = await getPosts({ preview: true, limit: 15 });
    console.log(posts)

    return {
        revalidate: 10,
        props: {
            posts
        }
    };
}

export default Blog;
