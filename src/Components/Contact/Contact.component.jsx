import React from "react";
import "./Contact.styles.css";
import Title from "../UI/Title/Title.component.jsx";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Maps from "../UI/Maps/maps.component";

function Contact() {
  const form = useRef();
  const [sucess, setSucess] = useState(null);
  const handleEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z7flva7",
        "template_xsgzimj",
        form.current,
        "aEmifIN_CUYxk1w0A"
      )
      .then(
        (result) => {
          setSucess(true);
        },
        (error) => {
          setSucess(false);
        }
      );
  };
  return (
    <>
      <Title>LETS CONNECT 🦸‍♂️</Title>
      <div className="contact__container ">
        <div className="contact__left">
          <div className="contact__formClass">
            <form
              className="contact__form"
              ref={form}
              onSubmit={handleEmail}
              action=""
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form__name"
                required
                placeholder="Enter your name here"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="emailid"
                className="form__email"
                required
                placeholder="Enter your email id"
              />

              <textarea
                name="message"
                id="form_text"
                cols="55"
                rows="10"
                minLength="2"
                className="form__textField"
                placeholder="Enter your message here"
              ></textarea>
              <button className="form__btn" type="submit">
                Send
              </button>
              {sucess && <p>Your message has been sent</p>}
            </form>
          </div>
        </div>
        <div className="contact__right">
          <Maps className="google__maps" />
        </div>
      </div>
    </>
  );
}

export default Contact;
