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
	darkWhite: "#fafafa",
	black: "#060213",
	bluishGrey: "#696D8C",
	grey: "#E1E1EB",
	lightGrey: "#ECEBF5",
	lighterGrey: "#fafafc",
	darkGrey: "#A3A3C2",
	purple: "#6837EF",
	red: "#f25a68",
	green: "#25BB87",
};
