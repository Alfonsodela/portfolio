import styled from '@emotion/styled';
import { mobileUp, tabletUp } from '../breakpoints/breakpoints';

export const FooterLayout = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: #fff;
	width: 100%;
	padding-top: 16px;
	padding-bottom: 16px;
`;

export const FooterLink = styled.a`
	/* margin: 0px 50px; */
    margin: 35px 50px -13px;
	opacity: 0.5;
    font-family: Poppins,sans-serif;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: .15em;

    ${mobileUp} {
        display: none;
    }

    ${tabletUp} {
        display: inline-block;
    }
`;

export const Copyright = styled.p`
    margin: -58px 0px 0px;
    opacity: 0.5;
    font-family: Poppins,sans-serif;
    font-weight: 400;
    font-size: 16px;
`