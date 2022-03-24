import {
	Container,
	Notification,
	NotificationNumber,
	User,
	UserImage,
} from "./infoBar.style";
import { ReactComponent as Bell } from "../../../../assets/bell.svg";
import { ReactComponent as Arrow } from "../../../../assets/arrow-down.svg";
import UserImg from "../../../../assets/user/user.jpg";

export const InfoBar = () => {
	return (
		<Container>
			<Notification>
				<Bell />
				<NotificationNumber>3</NotificationNumber>
			</Notification>
			<User>
				<UserImage>
					<img src={UserImg} alt={"User"} />
				</UserImage>
				<Arrow />
			</User>
		</Container>
	);
};
