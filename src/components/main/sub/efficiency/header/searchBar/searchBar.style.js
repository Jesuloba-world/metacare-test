import styled from "styled-components";

export const Container = styled.form`
	width: 350px;
	height: 44px;
	background: ${({ theme }) => theme.white};
	display: flex;
	border: 1px solid ${({ theme }) => theme.grey};
	box-sizing: border-box;
	border-radius: 8px;
	overflow: hidden;
`;

export const Label = styled.label`
	padding-left: 16px;
	height: 100%;
	display: flex;
	align-items: center;

	&::placeholder {
		color: ${({ theme }) => theme.darkGrey};
	}
`;

export const Input = styled.input`
	height: 100%;
	width: 100%;
	border: none;

	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	padding-inline: 16px;

	&:focus {
		outline: none;
	}
`;

export const InvisibleButton = styled.button`
	display: none;
`;
