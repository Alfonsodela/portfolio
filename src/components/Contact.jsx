import styled from '@emotion/styled';
import { BtnForm, Center, ContactForm, ContactLayout, ContactTitle, InputDiv, InputForm, LabelForm, TextareaForm } from '../styles/layouts/ContactLayout';

const Contact = () => {
  return (
    <ContactLayout id="contact">
      <ContactTitle>Contáctame</ContactTitle>
      <Center>
        <ContactForm class="contact-form" method='post'>
          <InputDiv>
            <LabelForm htmlFor='name_input'>Nombre</LabelForm>
            <InputForm type="text" name="name_input" id="name_input" placeholder="Alfonso de la Manzanara"/>
          </InputDiv>
          <InputDiv>
            <LabelForm htmlFor='email_input'>Email</LabelForm>
            <InputForm type="text" name="email_input" id="email_input" placeholder="alfonsodelamanzanara@gmail.com"/>
          </InputDiv>
          <InputDiv>
            <LabelForm htmlFor='message_textarea'>Mensaje</LabelForm>
            <TextareaForm type="text" name="message_textarea" id="message_textarea" placeholder="Dame buenas noticias"></TextareaForm>
          </InputDiv>
          <BtnForm type="submit">Enviar</BtnForm>
        </ContactForm>
      </Center>

    </ContactLayout>
  )
}

export default Contact;