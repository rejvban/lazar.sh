import { Header } from "./header";
import { LayoutContainer } from "./layout.styled"

export interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {

    return (
        <LayoutContainer>
            <Header />
            {children}
        </LayoutContainer>
    )
}

export { Layout };
