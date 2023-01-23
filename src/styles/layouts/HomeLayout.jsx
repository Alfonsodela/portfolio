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

export const WrappLogoBN = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
