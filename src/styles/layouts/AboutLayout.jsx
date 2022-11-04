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

export const HomeTitle = styled.h1`
	color: var(--color-white);
	background-color: var(--color-black);
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
	color: var(--color-white);
	font-family: 'Poppins', sans-serif;
	font-size: 1.25rem;
`;

export const Profile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 40px;
	margin-right: 50px;
	border-radius: 6px;
	background-color: #1f1f1f;
`;

export const ImgProfile = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 225px;
	height: 225px;
	white-space: nowrap;
	background-color: transparent;
	border-radius: 50%;
	border: 4px solid #e91e63;
	box-shadow: 0 0 0 6px rgb(233 30 99 / 25%);
	margin-bottom: 18px;
`;

export const Paragraph = styled.p`
	width: 60%;
	margin: auto auto auto 25px;
	font-family: 'Poppins', sans-serif;
	font-weight: 100;
	font-size: 1.25rem;
	line-height: 1.6;
	word-spacing: 5px;
	color: var(--color-form);
`;

export const Competencies = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	margin-top: 125px;

	background-color: var(--color-pink);
`;
