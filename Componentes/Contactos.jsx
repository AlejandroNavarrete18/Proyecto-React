import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">¿Tienes alguna duda?</h1>
      <h1 className="primary-heading">Dejanos ayudarte</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="tucorreoelectronico@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;