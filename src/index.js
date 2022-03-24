import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle, theme } from "./globalstyle";
import { ThemeProvider } from "styled-components";
import { TabStore } from "./context";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<TabStore>
				<App />
			</TabStore>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
