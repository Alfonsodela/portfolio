import styled from '@emotion/styled';

export const NavScreenLayout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 45%;
	height: 100vh;
	position: fixed;
	z-index: 998;
	top: 0;
	left: ${({ open }) => (open ? '0' : '-100%')};
	transition: 0.5s all ease;

	background-color: var(--color-white);
`;

export const MenuItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
`;

export const MenuItemLink = styled.a`
	list-style: none;
	text-decoration: none;
	cursor: pointer;
	margin: 15px;
	text-transform: none;
	letter-spacing: 0;
	font-family: Gilroy-Extrabold;
	font-size: 2.5rem;
	color: var(--color-black);

	&:hover {
		color: var(--color-pink);
	}
`;

export const MenuItemLinkPink = styled.div`
	margin: 15px;
	text-transform: none;
	letter-spacing: 0;
	font-family: Gilroy-Extrabold;
	font-size: 2.5rem;
	color: var(--color-pink);
`;
