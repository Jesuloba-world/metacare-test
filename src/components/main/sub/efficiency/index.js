import { Container, ChartContainer } from "./efficiency.style";
import { Header, ChartBox } from "./subcomponent";
import { data } from "./data";

export const Efficiency = () => {
	return (
		<Container>
			<Header />
			<ChartContainer>
				{data.map((el, index) => (
					<ChartBox
						key={index}
						title={el.title}
						color={el.color}
						data={el.data}
						average={el.average}
						labels={el.labels}
					/>
				))}
			</ChartContainer>
		</Container>
	);
};
