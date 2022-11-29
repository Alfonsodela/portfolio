import styled from '@emotion/styled';
import { mobileUp, tabletUp, desktoptopUp } from '../breakpoints/breakpoints';

export const MessageLayout = styled.span`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 60vh;

	background-color: var(--color-pink);
	font-family: Gilroy-Extrabold;

	${mobileUp} {
		font-size: 28px;
	}

	${tabletUp} {
		font-size: 44px;
	}
`;

export const MessageWrapperWhite = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	width: 75%;
	line-height: 130%;
	color: var(--color-white);

	${desktoptopUp} {
		margin-top: 80px;
		justify-content: center;
	}

	${mobileUp} {
		line-height: 180%;
	}
`;

export const MessageWrapperBlack = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	width: 75%;
	border-bottom: 0.5rem;
	line-height: 130%;
	color: var(--color-black);

	${desktoptopUp} {
		justify-content: center;
	}

	${mobileUp} {
		line-height: 180%;
	}
`;
