import { Button, Container, Input } from "./questionBar.style";
import { ReactComponent as Search } from "../../../../assets/search.svg";

export const QuestionBar = () => {
	//TODO: add form validation with react-hook-form

	return (
		<Container>
			<Input placeholder="Ask us any question" type={"text"} />
			<Button>
				<Search />
			</Button>
		</Container>
	);
};
