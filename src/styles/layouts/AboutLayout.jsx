import styled from '@emotion/styled';
import { mobileUp, tabletUp } from '../breakpoints/breakpoints';

export const AboutLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	min-height: 250px;
	margin-top: -15px;

	background-color: var(--color-black);
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

export const AboutContainer = styled.div`
	width: 80%;
	margin: auto;
	text-align: center; ;
`;

export const AboutInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 50px;
	text-align: left;
`;

export const Profile = styled.div`
	background-color: rgba(0, 0, 0, 0.15);
`;

export const Competencies = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;

	background-color: var(--color-pink);
`;
