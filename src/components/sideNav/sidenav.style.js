import styled from "styled-components";

export const SideNavContainer = styled.div`
	width: 262px;
	// Height should not be limited
	// TODO: remove height when implememntation is complete
	height: 1100px;
	padding: 21px 19px 21px 22px;
	border-right: 1px solid ${({ theme }) => theme.lightGrey};
`;
