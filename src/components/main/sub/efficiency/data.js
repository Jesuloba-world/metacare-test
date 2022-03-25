import Chance from "chance";

const chance = Chance();

export const data = [
	{
		title: "Average response Time",
		average: "Average Response Time",
		color: "#F05D23",
		data: [
			{ name: "Jan", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "Feb", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "Mar", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "Apr", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "May", value: chance.natural({ min: 10, max: 50 }) },
		],
	},
	{
		title: "Replies per resolution ",
		average: "Average Replies ",
		color: "#3E68FF",
		data: [
			{ name: "Jan", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "Feb", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "Mar", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "Apr", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "May", value: chance.natural({ min: 10, max: 50 }) },
		],
	},
	{
		title: "Average resolution time",
		average: "Average Resolution Rate",
		color: "#FB6491",
		data: [
			{ name: "Jan", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "Feb", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "Mar", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "Apr", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "May", value: chance.natural({ min: 10, max: 50 }) },
		],
	},
	{
		title: "First contact resolution rate",
		average: "Average Contact Rate",
		color: "#07C9E2",
		data: [
			{ name: "Jan", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "Feb", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "Mar", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "Apr", value: chance.natural({ min: 10, max: 50 }) },
			{ name: "May", value: chance.natural({ min: 10, max: 50 }) },
		],
	},
];
