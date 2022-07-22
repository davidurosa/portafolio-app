import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

const Contact = () => {

  const form = useRef();

  const mostrarAlert=()=>{
    Swal.fire( {
      position: 'top-end',
      icon: 'success',
      title: 'Mensaje enviado',
      showConfirmButton: false,
      timer: 1500
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6co6xwa', 'template_javik2e', form.current, '_jigG7lxA-wdhlfic')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          mostrarAlert();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Ponerse en contacto</h5>
      <h2>contactame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Correo</h4>
            <h5>urosaclawred21@gmail.com</h5>
            <a href="mailto:urosaclawred21@gmail.com">Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger />
            <h4>Messenger</h4>
            <h5>David Urosa</h5>
            <a
              href="https://m.me/david.urosa.7/"
              target="_blank"
              rel="noreferrer"
            >
              Enviar mensaje
            </a>
          </article>
        </div>
        {/* <========== correo gmail============= */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            required
          />
          <input type="email" name="email" placeholder="Tu correo" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Tu mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
