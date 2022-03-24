import styled from "styled-components";

export const Container = styled.div`
	height: 78px;
	border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
	width: 100%;
	padding-inline: 40px 56px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
