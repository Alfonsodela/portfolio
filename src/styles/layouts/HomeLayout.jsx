import styled from '@emotion/styled';
import { mobileUp, tabletUp } from '../breakpoints/breakpoints';

export const HomeLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100vh;

	color: var(--color-white);
	background-color: var(--color-black);
	white-space: nowrap;
	font-family: Gilroy-Extrabold;
`;

export const HomeTitle = styled.span`
	color: var(--color-white);
	background-color: var(--color-black);
	white-space: nowrap;
	font-family: Gilroy-Extrabold;

	${mobileUp} {
		font-size: 28px;
	}

	${tabletUp} {
		font-size: 54px;
	}
`;

export const HomeSubTitle = styled.span`
	color: #968f91;
	font-family: Poppins, sans-serif;
	font-weight: 400;
	font-size: 1.25rem;
	white-space: nowrap;

	margin-top: 1rem;

	${mobileUp} {
		font-size: 0.75rem;
	}

	${tabletUp} {
		font-size: 1.25rem;
	}
`;

export const NavHome = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
export const NavHomeAbout = styled.a`
	margin-top: 10px;
	text-decoration: none;
	cursor: pointer;
	color: var(--color-white);
	font-family: Poppins, sans-serif;
	font-weight: 600;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.15em;

	&:hover {
		color: var(--color-pink);
	}
`;
export const NavHomeGuion = styled.span`
	margin-top: 10px;

	color: var(--color-pink);
	font-weight: 900;
	padding: 0.75rem;
	font-size: 16px;
`;
