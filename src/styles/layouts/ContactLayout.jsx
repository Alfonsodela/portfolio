import styled from '@emotion/styled';
import { mobileUp, tabletUp } from '../breakpoints/breakpoints';

export const ContactLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	min-height: 250px;

	background-color: var(--color-form);
`;

export const ContactTitle = styled.h1`
	color: var(--color-black);
	background-color: var(--color-form);
	white-space: nowrap;
	font-family: Gilroy-Extrabold;
	margin-top: 50px;
	margin-bottom: 20px;

	${mobileUp} {
		font-size: 28px;
	}

	${tabletUp} {
		font-size: 54px;
	}
`;
