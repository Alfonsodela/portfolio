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

const Contact = () => {
	return (
		<ContactLayout id='contact'>
			<ContactTitle>Contáctame</ContactTitle>
			<Center>
				<ContactForm class='contact-form' method='post'>
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
