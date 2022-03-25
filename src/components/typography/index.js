import styled from "styled-components";

export const TextSmallDark = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	color: ${({ theme }) => theme.black};
`;

export const TextSmallDarkBold = styled(TextSmallDark)`
	font-weight: 500;
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

export const TextBigBold = styled.h1`
	font-weight: 600;
	font-size: 24px;
	line-height: 160%;
	color: ${({ theme }) => theme.black};
`;

export const TextNormalBold = styled.h2`
	font-weight: 600;
	font-size: 18px;
	line-height: 26px;
	color: ${({ theme }) => theme.black};
`;
