import {
	Container,
	ChartSpace,
	Extra,
	ChartHead,
	ChartHeadLHS,
	ChartHeadRHS,
	SomethingGreen,
	Priority,
	Month,
	ColorIndicator,
	FlexBox,
	LineBetween,
	ChartContainer,
} from "./chartBox.style";
import {
	TextNormalBold,
	TextSmallDark,
	TextSmallDarkBold,
} from "../../../../typography";
import { ReactComponent as Calendar } from "../../../../../assets/calendar.svg";

export const ChartBox = ({ title, color, data }) => {
	return (
		<Container>
			<ChartSpace>
				<ChartHead>
					<ChartHeadLHS>
						<TextNormalBold>{title}</TextNormalBold>
						<SomethingGreen>
							<p>+4.14%</p>
						</SomethingGreen>
					</ChartHeadLHS>
					<ChartHeadRHS>
						<FlexBox>
							<Priority>
								<ColorIndicator color={color} />
								<TextSmallDarkBold>
									High Priority
								</TextSmallDarkBold>
							</Priority>
						</FlexBox>
						<LineBetween />
						<FlexBox move>
							<Month>
								<TextSmallDark>This Month</TextSmallDark>
								<Calendar />
							</Month>
						</FlexBox>
					</ChartHeadRHS>
				</ChartHead>
				<ChartContainer></ChartContainer>
			</ChartSpace>
			<Extra></Extra>
		</Container>
	);
};
