import Link from 'next/link';
import styled from "styled-components";

const HeaderContainer = styled.div`
    font-family: 'Ubuntu Mono', monospace;
    padding: .5rem 0 .5rem 0;
`;

const HeaderTitle = styled.span`
    font-size: 3rem;
    color: #fcba03;
    white-space: nowrap
`;

const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 0.25rem;
`;

const HeaderLinks = styled.div`
    font-weight: bold;
    display: flex;
    justify-content: space-between;

    a {
        color: #2e2459;
        padding: 0 0.25rem;
    }
`;

const HeaderTopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export { HeaderContainer, HeaderTitle, HeaderInfo, HeaderLinks, HeaderTopSection };
