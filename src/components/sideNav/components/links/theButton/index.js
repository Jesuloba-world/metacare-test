import { useState } from "react";
import { Container, SubContainer, Button, Link } from "./theButton.style";
import { TextNormalLink } from "../../../../typography";
import { ReactComponent as Arrow } from "../../../../../assets/arrow.svg";

export const TheButton = ({ name, Icon, sub }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<Container>
			<Button
				onClick={() => setIsActive((prev) => !prev)}
				isActive={isActive}
			>
				<Icon isActive={isActive} />
				<TextNormalLink>{name}</TextNormalLink>
				<Arrow className="arrow" />
			</Button>
			{isActive ? (
				<SubContainer>
					{sub.map((el, index) => (
						<Link
							key={index}
							href={el.link}
							active={el.link === "/"} //since it's only one page
						>
							<TextNormalLink>{el.name}</TextNormalLink>
						</Link>
					))}
				</SubContainer>
			) : null}
		</Container>
	);
};
