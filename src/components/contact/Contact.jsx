import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t] = useTranslation("global");

  const form = useRef();

  const mostrarAlert=()=>{
    Swal.fire( {
      position: 'top-end',
      icon: 'success',
      title: 'OK',
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
      <h5>{t("contact.title")}</h5>
      <h2>{t("contact.subtitle")}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>urosaclawred21@gmail.com</h5>
            <a href="mailto:urosaclawred21@gmail.com">{t("contact.send")}</a>
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
              {t("contact.send")}
            </a>
          </article>
        </div>
        {/* <========== correo gmail============= */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t("contact.name")} 
            required
          />
          <input type="email" name="email" placeholder={t("contact.email")}  required />
          <textarea
            name="message"
            rows={7}
            placeholder={t("contact.message")} 
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
