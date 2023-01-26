import styled from '@emotion/styled';
import {
	mobileUp,
	tabletUp,
	laptoptopUp,
	desktoptopUp
} from '../breakpoints/breakpoints';

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
	margin-top: 120px;
	margin-bottom: 20px;

	${mobileUp} {
		margin-top: 50px;
		font-size: 28px;
	}

	${tabletUp} {
		margin-top: 90px;
		font-size: 54px;
	}
`;

export const AboutContainer = styled.div`
	width: 80%;
	margin: auto;
	text-align: center; ;
`;

export const AboutInner = styled.div`
	${mobileUp} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	${laptoptopUp} {
		flex-direction: row;
	}

	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 50px;
	text-align: left;
	color: var(--color-white);
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
`;

export const Profile = styled.div`
	${mobileUp} {
		margin-bottom: 50px;
		margin-right: 0px;
	}

	${tabletUp} {
		margin-right: 50px;
	}

	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px;
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
	font-size: 1rem;
	line-height: 1.6;
	word-spacing: 5px;
	color: var(--color-form);

	${mobileUp} {
		margin: auto;
		text-align: left;
		width: 100%;
	}
`;

export const Competencies = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	padding-top: 40px;
	padding-bottom: 120px;

	background-color: var(--color-black);
`;

export const TitleCompetencies = styled.div`
	color: var(--color-white);
	background-color: var(--color-black);
	white-space: nowrap;
	font-family: Gilroy-Extrabold;
	margin: 55px 0px;

	${mobileUp} {
		margin-top: 50px;
		font-size: 28px;
	}

	${tabletUp} {
		margin-top: 50px;
		font-size: 54px;
	}
`;

export const CompetenciesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	${desktoptopUp} {
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
`;

export const TitleTextCompetencies = styled.div`
	font-size: 12px;
	letter-spacing: 0.15em;
	text-transform: uppercase;
	font-weight: 600;
	color: var(--color-white);
`;

export const TextCompetencies = styled.div`
	margin-left: 30px;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 0.5rem;
`;

export const TextCompetenciesB = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.5rem;

	${tabletUp} {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.5rem;
	}
`;

export const TextCompetenciesC = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.5rem;
	margin-top: 30px;

	${tabletUp} {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.5rem;
		margin-top: 30px;
		margin-left: 30px;
	}

	${desktoptopUp} {
		margin-top: 0px;
	}
`;

export const WrapperTech = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: black;
	width: 150px;
	height: 150px;
`;

export const TitleTech = styled.p`
	margin: 10px 0px 0px 0px;
	color: white;
`;
