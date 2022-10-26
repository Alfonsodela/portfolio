import styled from '@emotion/styled';

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
	font-size: 54px;
`;

export const HomeTitle = styled.span`
	color: #968F91;
	font-family: Poppins, sans-serif;
	font-weight: 400;
	font-size: 1.25rem;
	white-space: nowrap;

	margin-top: 1rem;
`;

export const NavHome = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`
export const NavHomeAbout = styled.a`
	margin-top: 10px;
	text-decoration: none;
	cursor: pointer;
	color: var(--color-white);
	font-family: Poppins,sans-serif;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: .15em;
`
export const NavHomeGuion = styled.span`
	margin-top: 10px;

	color: var(--color-pink);
    font-weight: 900;
    padding: 0.75rem;
    font-size: 16px;
` 

