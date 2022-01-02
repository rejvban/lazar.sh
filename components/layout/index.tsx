import { Header } from "./header";
import { LayoutContainer } from "./layout.styled"

const Layout: React.FC = ({children}) => {

    return (
        <LayoutContainer>
            <Header />
            {children}
        </LayoutContainer>
    )
}

export { Layout };
