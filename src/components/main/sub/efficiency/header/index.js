import {
	Container,
	FilterContainer,
	Filters,
	Export,
	FilterOption,
	FlexBox,
	LineBetween,
} from "./header.style";
import { TextBigBold, TextNormalLink } from "../../../../typography";
import { ReactComponent as ArrowBlack } from "../../../../../assets/arrow-down-black.svg";
import { SearchBar } from "./searchBar";

export const Header = () => {
	return (
		<Container>
			<TextBigBold>Efficiency Analytics</TextBigBold>
			<FilterContainer>
				<FlexBox>
					<Filters>
						<SearchBar />
						<FilterOption>
							<TextNormalLink>Filter Options</TextNormalLink>
							<ArrowBlack />
						</FilterOption>
					</Filters>
				</FlexBox>
				<LineBetween />
				<FlexBox export>
					<Export>
						<TextNormalLink>Export</TextNormalLink>
					</Export>
				</FlexBox>
			</FilterContainer>
		</Container>
	);
};
