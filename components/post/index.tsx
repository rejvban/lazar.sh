import Link from "next/link";
import dayjs from 'dayjs';
import { Entry } from "contentful";
import { PostContainer, PostCopy, PostDate, PostHeader, PostSubject } from "./post.styled";

import type { TypePostFields } from "lib/types";

const Post: React.FC<Entry<TypePostFields>> = ({ fields }) => {
    return (
        <PostContainer>
            <PostHeader >
                <Link href={`/blog/` + fields.slug}>
                    {fields.title}
                </Link>
            </PostHeader>
            <PostDate>
                <span>
                    {fields.publishedAt && dayjs(fields.publishedAt).format('YYYY/MM/DD HH:mm:ss')}
                </span>
            </PostDate>
            <PostSubject>
                {fields.subject?.join(', ')}
            </PostSubject>
            <PostCopy>
                {fields.summary}
            </PostCopy>
        </PostContainer>
    )
}

export { Post };