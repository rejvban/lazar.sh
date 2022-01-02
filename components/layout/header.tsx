
import Link from 'next/link';
import {HeaderContainer, HeaderInfo, HeaderLinks, HeaderTitle, HeaderTopSection} from './header.styled';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderTopSection>
                <HeaderTitle>
                    $lazar
                </HeaderTitle>
                <HeaderInfo>
                    <span>
                        lazar [at] codepolyglots [dot] com
                    </span>
                </HeaderInfo>
            </HeaderTopSection>
            <HeaderLinks>
                <Link href="/">
                    [home]
                </Link>
                <span>
                    <a href="https://www.github.com/rejvban" target="_blank" rel='noopener noreferrer'>
                        [github]
                    </a>
                    <a href="https://www.linkedin.com/in/lkaric/" target="_blank" rel='noopener noreferrer'>
                        [linkedin]
                    </a>
                </span>
            </HeaderLinks>
        </HeaderContainer>
    )
}

export { Header };
