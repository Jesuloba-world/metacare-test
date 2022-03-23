import styled from "styled-components";

export const Container = styled.div``;

export const Button = styled.button`
	display: flex;
	align-items: center;
	gap: 19px;
	background: transparent;
	border: none;
	height: 25px;
	width: 200px;
	padding-inline: 3px 8px;
	color: ${({ theme, isActive }) =>
		isActive ? theme.purple : theme.bluishGrey};

	.arrow {
		margin-left: auto;
		${({ isActive }) => (isActive ? `transform: rotate(90deg)` : null)};
	}
`;

export const SubContainer = styled.div`
	margin-left: 14px;
	margin-top: 12px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Link = styled.a`
	height: 24px;
	text-decoration: none;
	padding-left: 20px;
	border-left: ${({ theme, active }) =>
		active ? `1px solid ${theme.lightGrey}` : `none`};
	color: ${({ theme, active }) => (active ? theme.black : theme.bluishGrey)};
`;
