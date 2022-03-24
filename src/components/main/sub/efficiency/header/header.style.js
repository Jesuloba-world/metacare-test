import styled from "styled-components";

export const Container = styled.div`
	height: 110px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const FilterContainer = styled.div`
	display: flex;
	width: 670px;
	align-items: center;
`;

export const Filters = styled.div`
	display: flex;
	gap: 24px;
`;

export const Export = styled.button`
	color: ${({ theme }) => theme.white};
	background: ${({ theme }) => theme.green};
	border: none;
	width: 105px;
	height: 44px;
	border-radius: 8px;
`;

export const FilterOption = styled.button`
	width: 160px;
	height: 44px;
	background: ${({ theme }) => theme.white};
	border: 1px solid ${({ theme }) => theme.grey};
	box-sizing: border-box;
	border-radius: 8px;
	display: flex;
	gap: 16px;
	align-items: center;
	justify-content: center;
`;

export const FlexBox = styled.div`
	flex-grow: 1;
	display: flex;
	${(props) => props.export && `justify-content: flex-end`};
`;

export const LineBetween = styled.div`
	width: 1px;
	height: 30px;
	background: ${({ theme }) => theme.lightGrey};
`;
