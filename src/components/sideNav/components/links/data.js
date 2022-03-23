import {
	AdminIcon,
	Calendar,
	Chat,
	Checkmark,
	Clock,
} from "../../../../assets/dynamic icons";

export const links = [
	{ name: "Admin", Icon: AdminIcon, sub: [] },
	{ name: "Knowledge Base", Icon: Checkmark, sub: [] },
	{ name: "Train SAM", Icon: Checkmark, sub: [] },
	{ name: "Agent Inbox", Icon: Calendar, sub: [] },
	{ name: "Help Center", Icon: Clock, sub: [] },
	{
		name: "Analytics",
		Icon: Chat,
		sub: [
			{ name: "Teams", link: "/" },
			{ name: "Knowledge Base", link: "#" },
			{ name: "Train SAM", link: "#" },
			{ name: "Help Center", link: "#" },
		],
	},
];
