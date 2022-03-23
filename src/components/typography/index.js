import styled from "styled-components";

export const TextSmallDark = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	color: ${({ theme }) => theme.black};
`;

export const TextSmallGrey = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 20px;
	color: ${({ theme }) => theme.bluishGrey};
`;

export const TextNormalLink = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: inherit;
`;
