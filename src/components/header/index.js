import { Container } from "./header.style";
import { QuestionBar, InfoBar } from "./components";

export const Header = () => {
	return (
		<Container>
			<QuestionBar />
			<InfoBar />
		</Container>
	);
};
