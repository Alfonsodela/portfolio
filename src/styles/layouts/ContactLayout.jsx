import styled from '@emotion/styled';
import { mobileUp, tabletUp } from '../breakpoints/breakpoints';

export const ContactLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	min-height: 250px;
	padding-bottom: 150px;

	background-color: var(--color-form);
`;

export const ContactTitle = styled.h1`
	color: var(--color-black);
	background-color: var(--color-form);
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

export const Center = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: normal;
	width: 100%;
`;

export const ContactForm = styled.form`
	width: 95%;
	margin: 36px auto auto;
	text-align: left;

	${ tabletUp } {
		width: 515px;
	}
`;

export const InputDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: auto auto 25px;
`;

export const LabelForm = styled.label`
	font-family: Poppins, sans-serif;
	font-weight: 600;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.15em;
`;

export const InputForm = styled.input`
	width: 100%;
	margin: 5px 0px;
	box-sizing: border-box;
	padding: 14px 16px;
	border-radius: 3px;
	border: 0;
	background: var(--color-gray);	
	font-family: Poppins, sans-serif;
	font-size: 12px;
	color: #252525;
`;

export const TextareaForm = styled.textarea`
	width: 100%;
	min-height: 100px;
	margin: 5px 0px;
	box-sizing: border-box;
	padding: 14px 16px;
	border-radius: 3px;
	border: 0;
	background: var(--color-gray);	
	font-family: Poppins, sans-serif;
	font-size: 12px;
	color: #252525;
`;

export const BtnForm = styled.button`
	width: 100%;
	padding: 14px 16px;
	text-align: center;
	border: 0;
	border-radius: 3px;
	background-color: var(--color-pink);
	font-family: Poppins, sans-serif;
	font-weight: 600;
	font-size: 12px;
	color: white;
	text-transform: uppercase;
	letter-spacing: 0.15em;
`