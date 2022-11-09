import styled from '@emotion/styled';
import { ContactLayout, ContactTitle } from '../styles/layouts/ContactLayout';

const Contact = () => {
  return (
    <ContactLayout id="contact">
      <ContactTitle>Contáctame</ContactTitle>
      <div>
        <form>
          <div>
            <label>Nombre</label>
            <input/>
          </div>
          <div>
            <label>Email</label>
            <input/>
          </div>
          <div>
            <label>Mensaje</label>
            <textarea/>
          </div>
          <button>Enviar</button>
        </form>
      </div>

    </ContactLayout>
  )
}

export default Contact;