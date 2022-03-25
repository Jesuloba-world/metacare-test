import Chance from "chance";

const chance = Chance();

export const data = [
	{
		title: "Average response Time",
		color: "#F05D23",
		data: [
			{ name: "Jan", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "Feb", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "Mar", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "Apr", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "May", data: chance.natural({ min: 10, max: 50 }) },
		],
	},
	{
		title: "Replies per resolution ",
		color: "#3E68FF",
		data: [
			{ name: "Jan", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "Feb", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "Mar", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "Apr", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "May", data: chance.natural({ min: 10, max: 50 }) },
		],
	},
	{
		title: "Average resolution time",
		color: "#FB6491",
		data: [
			{ name: "Jan", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "Feb", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "Mar", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "Apr", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "May", data: chance.natural({ min: 10, max: 50 }) },
		],
	},
	{
		title: "First contact resolution rate",
		color: "#07C9E2",
		data: [
			{ name: "Jan", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "Feb", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "Mar", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "Apr", data: chance.natural({ min: 10, max: 50 }) },
			{ name: "May", data: chance.natural({ min: 10, max: 50 }) },
		],
	},
];
