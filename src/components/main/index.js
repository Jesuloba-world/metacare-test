import { useContext } from "react";
import { Container } from "./main.style";
import { TabContext } from "../../context/tabContext";
import { ComingSoon, Efficiency } from "./sub";

export const MainSection = () => {
	const { tabs } = useContext(TabContext);

	const currentActiveTab = tabs.find((tab) => tab.active === true).name;

	let display;

	switch (currentActiveTab) {
		case "Efficiency":
			display = <Efficiency />;
			break;
		default:
			display = <ComingSoon />;
	}

	return <Container>{display}</Container>;
};
