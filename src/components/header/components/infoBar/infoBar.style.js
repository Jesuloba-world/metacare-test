import styled from "styled-components";

export const Container = styled.div`
	width: 175px;
	height: 54px;
	border: 1px solid ${({ theme }) => theme.lightGrey};
	border-radius: 8px;
	display: flex;
	align-items: center;
	padding-inline: 18px 20px;
`;

export const Notification = styled.div`
	flex-grow: 1;
	height: 24px;
	display: flex;
	gap: 4px;
	align-items: center;
	border-right: 1px solid ${({ theme }) => theme.lightGrey};
`;

export const NotificationNumber = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 20px;
	color: ${({ theme }) => theme.white};
	width: 16px;
	height: 16px;
	background: ${({ theme }) => theme.red};
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const User = styled.div`
	flex-grow: 1;
	display: flex;
	align-items: center;
	gap: 12px;
	justify-content: flex-end;
`;

export const UserImage = styled.div`
	height: 32px;
	width: 32px;
	overflow: hidden;
	border-radius: 50%;
	border: 1px solid ${({ theme }) => theme.purple};

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;
