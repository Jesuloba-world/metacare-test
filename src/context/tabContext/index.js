import { createContext, useState } from "react";

export const TabContext = createContext();

const Store = ({ children }) => {
	const initialTabs = [
		{ name: "Efficiency", active: true },
		{ name: "Volume", active: false },
		{ name: "Customer Satisfaction", active: false },
		{ name: "Backlog", active: false },
	];

	const [tabs, setTabs] = useState(initialTabs);

	return (
		<TabContext.Provider value={{ tabs, setTabs }}>
			{children}
		</TabContext.Provider>
	);
};

export default Store;
