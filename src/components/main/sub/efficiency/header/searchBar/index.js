import { Container, Label, Input, InvisibleButton } from "./searchBar.style";
import { ReactComponent as SearchIcon } from "../../../../../../assets/search-small.svg";

export const SearchBar = () => {
	// TODO: use react-hook-form for validation

	return (
		<Container>
			<Label htmlFor="search">
				<SearchIcon />
			</Label>
			<Input
				id="search"
				type="text"
				name="search"
				placeholder="Search"
			></Input>
			<InvisibleButton />
		</Container>
	);
};
