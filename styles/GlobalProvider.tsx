import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "styles";

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
  );
};

export { GlobalProvider };