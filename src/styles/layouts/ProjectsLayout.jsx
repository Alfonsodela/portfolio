import styled from '@emotion/styled';

export const ProjectsLayout = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	min-height: 850px;
	color: var(--color-black);
	background-color: var(--color-white);
`;

export const ProjectsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem 1.5rem;

	align-items: center;
	justify-content: center;
`;

export const Article = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 325px;
	min-height: 225px;

	user-select: none;
	background: var(--color-pink);
	border-radius: 0.5rem;
	opacity: 1;
	text-align: center;
	overflow: hidden;
`;

export const InnerContainer = styled.div`
	width: 290px;
	height: 160px;
	position: relative;
	border-radius: 0.5rem;
	margin-top: 15px;
`;

export const Img = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 5px;
	transition: all 500ms;

	&:hover {
		transform: scale(1.65);
	}
`;

export const ProjectName = styled.span`
	font-size: 1rem;
	color: var(--color-white);
	text-transform: uppercase;
	font-family: Gilroy-Extrabold;
	padding: 1rem;
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
	background-color: rgba(37,37,37,.85);
	
	
`;
