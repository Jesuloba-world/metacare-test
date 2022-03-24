import styled from "styled-components";

export const Container = styled.form`
	width: 441px;
	height: 54px;
	background: ${({ theme }) => theme.lighterGrey};
	border-radius: 10px;
	overflow: hidden;
	display: flex;
`;

export const Input = styled.input`
	width: 100%;
	background-color: transparent;
	border: none;
	padding-left: 16px;
	font-size: 16px;
	line-height: 29px;

	&::placeholder {
		color: ${({ theme }) => theme.darkGrey};
	}

	&:focus {
		outline: none;
	}
`;

export const Button = styled.button`
	background: ${({ theme }) => theme.lighterGrey};
	border: none;
	padding: 16px;
`;
