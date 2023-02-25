import React from "react";

// import stylesheets
import "./contact.scss";

// import buttons
import Button from "../../../components/Buttons";

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-form">
        <div className="contact-former">
          <div className="email-form">
            <label>EMAIL</label>
            <input type="text" className="contact-email"></input>
          </div>
          <div className="plan-form">
            <label>
              PLAN <span>(OPTIONAL)</span>
            </label>
            <input type="text" className="contact-plan"></input>
          </div>
        </div>
        <div className="contact-content">
          <label>MESSAGE</label>
          <textarea></textarea>
        </div>
        <Button type="btn-default" title="Send" />
      </div>
      <div className="social-links">
        <a href="https://linkedin.com">Linkedin</a>
        <a href="https://mail.google.com">Email</a>
        <a href="https://github.com">Github</a>
      </div>
    </div>
  );
};

export default ContactForm;
