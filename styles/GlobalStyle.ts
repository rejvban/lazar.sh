import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    html, body, #__next {
        height: 100%;
        width: 100%;    
    }
    body {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        background-color: #f9f9f9;
        transition: background 0.25s ease-in-out;
    }
`;