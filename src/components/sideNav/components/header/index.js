import { Main, ImageContainer, TextContainer } from "./header.style";
import { TextSmallDark, TextSmallGrey } from "../../../typography";
import User from "../../../../assets/user/user.jpg";

export const Header = () => {
	return (
		<Main>
			<ImageContainer>
				<img src={User} alt="userImage" />
			</ImageContainer>
			<TextContainer>
				<TextSmallDark>Metacare</TextSmallDark>
				<TextSmallGrey>adeyinka@metacare.app</TextSmallGrey>
			</TextContainer>
		</Main>
	);
};
