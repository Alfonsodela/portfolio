import styled from '@emotion/styled';

export const ExternalLayout = styled.div`
	display: flex;
	/* justify-content: space-around; */
	justify-content: flex-end;
	align-items: center;

	width: 100%;
	height: 24px;
	position: fixed;
	z-index: 999;

	right: 0px;

	padding: 14px;
	border-bottom-left-radius: 4px;

	background-color: var(--color-black);
`;

export const NavExternalLayout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 30px;
`;
export const NavExternalAbout = styled.a`
	margin-top: 20px;
	padding: 20px;
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