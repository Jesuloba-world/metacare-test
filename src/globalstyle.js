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

export const theme = {
	white: "#fff",
	black: "#060213",
	bluishGrey: "#696D8C",
	lightGrey: "#ECEBF5",
	purple: "#6837EF",
	lighterGrey: "#fafafc",
	red: "#f25a68",
};
