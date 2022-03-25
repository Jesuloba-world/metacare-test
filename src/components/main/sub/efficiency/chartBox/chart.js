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
};
