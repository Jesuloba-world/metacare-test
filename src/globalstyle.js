import { createGlobalStyle as styled } from "styled-components";

export const GlobalStyle = styled`
  html, body {    
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gelion', sans-serif;
  }
`;
