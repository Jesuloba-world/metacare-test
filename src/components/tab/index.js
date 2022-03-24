import { useContext } from "react";
import { Container, TabContainer } from "./tab.style";
import { TabContext } from "../../context/tabContext";
import { TextNormalLink } from "../typography";

export const TabSection = () => {
	const { tabs, setTabs } = useContext(TabContext);

	const setTabActive = (name) => {
		setTabs((prev) => {
			return prev.map((tab) =>
				tab.name === name
					? { ...tab, active: true }
					: { ...tab, active: false }
			);
		});
	};

	return (
		<Container>
			{tabs.map((tab, index) => (
				<TabContainer
					key={index}
					active={tab.active}
					onClick={() => setTabActive(tab.name)}
				>
					<TextNormalLink>{tab.name}</TextNormalLink>
				</TabContainer>
			))}
		</Container>
	);
};
