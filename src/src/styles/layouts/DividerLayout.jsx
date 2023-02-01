import styled from '@emotion/styled';
import { mobileUp, laptoptopUp, desktoptopUp } from '../breakpoints/breakpoints';

export const DividerLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	z-index: -1;

	${mobileUp} {
		min-height: 125px;
		background: var(--color-white);
	}

	/* ${laptoptopUp} {
		min-height: 250px;
		background: var(--color-pink);
	} */
`;

export const KeyboardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 47%;
	margin-top: -100px;
	z-index: 997;

	animation-name: floating;
	animation-duration: 3s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
	margin-top: -80px;

	@keyframes floating {
		0% {
			transform: translate(0, 0px);
		}
		50% {
			transform: translate(0, 15px);
		}
		100% {
			transform: translate(0, -0px);
		}
	}

	${mobileUp} {
		display: none;
	}

	/* ${laptoptopUp} {
		display: flex;
		margin-top: -50px;
	} */
`;

export const HybridBottomContainer = styled.div`
	width: 100%;
	margin-top: -75px;
	z-index: 998;

	${mobileUp} {
		margin-top: -18px;
	}

	/* ${desktoptopUp} {
		margin-top: -50px;
	} */
`;
