import { Container } from "./links.style";
import { links } from "./data";
import { TheButton } from "./theButton";

export const Links = () => {
	return (
		<Container>
			{links.map((el, index) => (
				<TheButton
					key={index}
					name={el.name}
					Icon={el.Icon}
					sub={el.sub}
				/>
			))}
		</Container>
	);
};
