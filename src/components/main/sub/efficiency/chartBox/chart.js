import {
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Line,
} from "recharts";

export const Chart = ({ data, color, height, width }) => {
	return (
		<LineChart width={width} height={height} data={data}>
			<CartesianGrid vertical={false} />
			<XAxis
				dataKey="name"
				axisLine={false}
				tickLine={false}
				tickMargin={10}
			/>
			<YAxis
				axisLine={false}
				tickLine={false}
				tickmargin={5}
				ticks={[10, 20, 30, 40, 50]}
			/>
			<Tooltip />
			<Line
				type="straight"
				dataKey="value"
				stroke={color}
				activeDot={{ r: 8 }}
			/>
		</LineChart>
	);
	/**
	 * ISSUES
	 * 1. this is first time using recharts
	 * 2. I am unable to remove the first and last cartesian lines
	 * 3. There are 5 values and 7 data points in the design, how does that work?
	 * 4. I hope I will be able to learn more when I get the job.
	 */
};
