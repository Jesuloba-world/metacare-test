import { PageContainer } from "./container/pageContainer";
import { SideNav, Header } from "./components";

function App() {
	return (
		<PageContainer>
			<SideNav />
			<div style={{ width: "100%" }}>
				<Header />
			</div>
		</PageContainer>
	);
}

export default App;
