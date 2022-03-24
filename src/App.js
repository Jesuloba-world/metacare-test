import { PageContainer } from "./container/pageContainer";
import { SideNav, Header, TabSection, MainSection } from "./components";

function App() {
	return (
		<PageContainer>
			<SideNav />
			<div style={{ width: "100%" }}>
				<Header />
				<TabSection />
				<MainSection />
			</div>
		</PageContainer>
	);
}

export default App;
