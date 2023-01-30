import emailjs from '@emailjs/browser';
import styled from '@emotion/styled';
import {
	BtnForm,
	Center,
	ContactForm,
	ContactLayout,
	ContactTitle,
	InputDiv,
	InputForm,
	LabelForm,
	TextareaForm
} from '../styles/layouts/ContactLayout';
import { dataForm } from '../data/dataForm';
import React, { useRef } from 'react';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_9e2buor', 'template_qfvt3bu', form.current, 'UQCiPg2V4BR5tEFdu')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});

		event.target.reset();
	};


	return (
		<ContactLayout id='contact'>
			<ContactTitle>Contáctame</ContactTitle>
			<Center>
				<ContactForm class='contact-form' ref={form} onSubmit={sendEmail}>
					<InputDiv>
						<LabelForm htmlFor='name_input'>Nombre</LabelForm>
						<InputForm {...dataForm[0]}></InputForm>
					</InputDiv>
					<InputDiv>
						<LabelForm htmlFor='email_input'>Email</LabelForm>
						<InputForm {...dataForm[1]}></InputForm>
					</InputDiv>
					<InputDiv>
						<LabelForm htmlFor='message_textarea'>Mensaje</LabelForm>
						<TextareaForm {...dataForm[2]}></TextareaForm>
					</InputDiv>
					<BtnForm type='submit'>Enviar</BtnForm>
				</ContactForm>
			</Center>
		</ContactLayout>
	);
};

export default Contact;
