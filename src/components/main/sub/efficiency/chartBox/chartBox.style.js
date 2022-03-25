import styled from "styled-components";

export const Container = styled.div`
	height: 314px;
	width: 100%;
	background: ${({ theme }) => theme.white};
	border: 1px solid ${({ theme }) => theme.lightGrey};
	box-sizing: border-box;
	border-radius: 10px;
	display: flex;
`;

export const ChartSpace = styled.div`
	height: 100%;
	width: 100%;
	padding: 24px;
	display: flex;
	flex-direction: column;
`;

export const Extra = styled.div`
	height: 100%;
	width: 235px;
	padding-inline: 24px;
	border-left: 1px solid ${({ theme }) => theme.lightGrey};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 18px;
`;

export const ExtraFrame = styled.div`
	width: 187px;
	height: 116px;
	background: ${({ theme }) => theme.darkWhite};
	display: flex;
	align-items: center;
	padding-left: 16px;

	div {
		p {
			margin-bottom: 8px;
		}
	}
`;

export const ChartHead = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 24px;
`;

export const ChartHeadLHS = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
`;

export const ChartHeadRHS = styled.div`
	display: flex;
	width: 272px;
`;

export const SomethingGreen = styled.div`
	background: rgba(37, 187, 135, 0.1);
	border-radius: 4px;
	padding: 4px 12px;

	p {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 20px;
		color: #25bb87;
	}
`;

export const Priority = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const ColorIndicator = styled.div`
	height: 10px;
	width: 10px;
	background: ${({ color }) => color};
	border-radius: 2px;
`;

export const Month = styled.button`
	background: ${({ theme }) => theme.white};
	border: 1px solid ${({ theme }) => theme.grey};
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 16px 11px;
	height: 38px;
	width: 148px;
`;

export const FlexBox = styled.div`
	flex-grow: 1;
	display: flex;
	${(props) => props.move && `justify-content: flex-end`};
`;

export const LineBetween = styled.div`
	width: 1px;
	height: 24px;
	background: ${({ theme }) => theme.lightGrey};
	align-self: center;
`;

export const ChartContainer = styled.div`
	max-width: 100%;
	height: 100%;
	display: flex;
	/* background-color: darkgreen; */
`;
