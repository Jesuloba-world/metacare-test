import { useRef, useState, useEffect } from "react";
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
	ExtraFrame,
} from "./chartBox.style";
import {
	TextNormalBold,
	TextSmallDark,
	TextSmallDarkBold,
	Text14Grey,
	TextMidBold,
} from "../../../../typography";
import { ReactComponent as Calendar } from "../../../../../assets/calendar.svg";
import { Chart } from "./chart";

export const ChartBox = ({ title, average, color, data, labels }) => {
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);
	const ref = useRef(null);

	useEffect(() => {
		setHeight(ref.current.clientHeight);
		setWidth(ref.current.clientWidth);
	}, []);

	const mean = Math.round(
		data
			.map((el) => el.value)
			.reduce((a, b) => {
				return a + b;
			}, 0) / data.length
	);

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
				<ChartContainer ref={ref}>
					<Chart
						data={data}
						color={color}
						height={height}
						width={width}
						labels={labels}
					/>
				</ChartContainer>
			</ChartSpace>
			<Extra>
				<ExtraFrame>
					<div>
						<Text14Grey>{average}</Text14Grey>
						<TextMidBold>{mean} Mins</TextMidBold>
						{/* I don't understand why we use Mins for every average */}
					</div>
				</ExtraFrame>
				<ExtraFrame>
					<div>
						<Text14Grey>Response Time</Text14Grey>
						<TextMidBold>1 Hour 30 Mins</TextMidBold>
						{/* How do we even calculate Response Time */}
					</div>
				</ExtraFrame>
			</Extra>
		</Container>
	);
};
