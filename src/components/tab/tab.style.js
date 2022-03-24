import styled from "styled-components";

export const Container = styled.section`
	height: 58px;
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
	padding-inline: 40px;
	display: flex;
	gap: 40px;
`;

export const TabContainer = styled.button`
	height: 100%;
	background: none;
	border: none;
	color: ${({ theme, active }) => (active ? theme.black : theme.bluishGrey)};
	border-bottom: ${({ active, theme }) =>
		active ? `2px solid ${theme.purple}` : null};
	${({ active }) => active && `transform: translateY(1px)`};
`;
