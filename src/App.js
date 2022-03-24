import { PageContainer } from "./container/pageContainer";
import { SideNav, Header, TabSection } from "./components";

function App() {
	return (
		<PageContainer>
			<SideNav />
			<div style={{ width: "100%" }}>
				<Header />
				<TabSection />
			</div>
		</PageContainer>
	);
}

export default App;
