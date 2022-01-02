import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "styles";


const GlobalProvider: React.FC = ({children}) => {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
  );
};

export { GlobalProvider };