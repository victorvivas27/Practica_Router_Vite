import React from "react";
import { FOOTER_SECTION } from "../../../util/ArrayFooter";
import { Link } from "react-router-dom"
import "./Footer.css";

const Footer = () => {
  const array = FOOTER_SECTION;
  
  return (
    <footer className="contenedor-footer">
      {array.map((section, index) => (
        <div key={index}>
          <h3 className="footer-titulo">{section.title}</h3>
          <ul className="contenedor-link">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                {/* Utilizamos un operador ternario para determinar si el enlace es interno o externo */}
                {link.internal ? (
                  <Link to={link.url}>{link.label}</Link>
                ) : (
                  <a href={link.url} target="_blank" >{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
