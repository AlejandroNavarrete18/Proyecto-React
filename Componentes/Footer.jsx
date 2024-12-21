import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Calidad</span>
          <span>Ayuda</span>
          <span>Compartir</span>
          <span>Carreras</span>
          <span>Trabajo</span>
        </div>
        <div className="footer-section-columns">
          <span>123-23456-7789</span>
          <span>hola@comida.com</span>
          <span>ofrecer@comida.com</span>
          <span>contactos@comida.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terminos y condiciones</span>
          <span>Politicas de privacidad</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;