import styled from 'styled-components';

const PostHeader = styled.div`
    margin-bottom: .25rem;

    a {
        color: #00449e;
        font-size: 1.5rem;
        text-decoration: none;
        transition: color .15s ease-in;

        :hover {
            color: #fcba03;
        }
    }
`;

const PostDate = styled.div`
`

const PostSubject = styled.div`
    margin-top: .5rem;
    font-family: 'Ubuntu Mono', monospace;
`

const PostContainer = styled.div`
    font-size: .875rem;
    margin-bottom: 2rem;
`;

const PostCopy = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export { PostContainer, PostHeader, PostDate, PostSubject, PostCopy };