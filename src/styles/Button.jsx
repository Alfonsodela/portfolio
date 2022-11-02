import styled from '@emotion/styled';

export const Button = styled.a`
	width: 20%;

	box-sizing: border-box;
	margin: auto;
	padding: 5px;
	border-radius: 3px;
	background: var(--color-white);
	color: var(--color-black);
	font-weight: 500;

	font-family: Gilroy-Light;
	margin-right: 18px;
	font-size: 1rem;
	box-shadow: 0 3px 7px 0 rgb(0 0 0 / 25%);
	text-decoration: none;

	&:hover {
		background: var(--color-black);
		color: var(--color-white);
        border-radius: 3px;
		box-shadow: 0 3px 7px 0 rgb(0 0 0 / 25%);
	
	}
`;
