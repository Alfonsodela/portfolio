import styled from '@emotion/styled';
import {
	mobileUp,
	tabletUp,
	desktoptopUp,
	laptoptopUp
} from '../breakpoints/breakpoints';

export const ProjectsLayout = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	min-height: 850px;
	color: var(--color-black);
	background-color: var(--color-white);

	${mobileUp} {
		min-height: 2300px;
	}

	${laptoptopUp} {
		min-height: 1500px;
	}

	${desktoptopUp} {
		margin-top: -50px;
		min-height: 1200px;
	}
`;

export const ProjectTitle = styled.span`
	color: #ff0000;
	white-space: nowrap;
	font-family: Gilroy-Extrabold;
	font-size: 54px;
	margin-bottom: 85px;

	${mobileUp} {
		font-size: 28px;
	}

	${tabletUp} {
		font-size: 54px;
	}

	${laptoptopUp} {
		margin-top: -80px;
	}
`;

export const ProjectsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem 2rem;

	align-items: center;
	justify-content: center;

	${mobileUp} {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 2rem 2rem;
	}

	${laptoptopUp} {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem 2rem;
	}

	${desktoptopUp} {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem 2rem;
	}
`;

export const Article = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 375px;
	min-height: 270px;

	user-select: none;
	background: #da1c5d;
	border-radius: 0.5rem;
	opacity: 1;
	text-align: center;
	overflow: hidden;
`;

export const InnerContainer = styled.div`
	width: 340px;
	height: 190px;
	position: relative;
	border-radius: 0.5rem;
	margin-top: 15px;
`;

export const Img = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 5px;
	transition: all 500ms;
	box-shadow: 0 3px 7px 0 rgb(0 0 0 / 25%);

	&:hover {
		transform: scale(1.7);
	}
`;

export const NameIconContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-top: 10px;

	width: 100%;
`;

export const ProjectName = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	margin-left: 35px;
	text-transform: uppercase;
	font-size: 1.15rem;
	color: var(--color-white);
	font-family: Gilroy-Extrabold;
	letter-spacing: 0.15em;
`;

export const ProjectOverlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	z-index: 5;

	min-width: 325px;
	min-height: 235px;

	margin-bottom: 10px;
	border-radius: 0.5rem;
	margin-top: 15px;
	opacity: 1;
	border-radius: 5px;
	background-color: rgba(37, 37, 37, 0.85);
`;
