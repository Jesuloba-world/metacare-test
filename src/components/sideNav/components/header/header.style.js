import styled from "styled-components";

export const Main = styled.div`
	width: 100%;
	height: 60px;
	background: ${({ theme }) => theme.white};
	border: 1px solid ${({ theme }) => theme.lightGrey};
	box-sizing: border-box;
	border-radius: 8px;
	padding: 15px 16px;
	display: flex;
	gap: 11px;
	align-items: center;
`;

export const ImageContainer = styled.div`
	overflow: hidden;
	width: 30px;
	height: 30px;
	border-radius: 5px;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
