import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo / Nombre */}
        <div className="footer-brand">
          <h3>Taxi Baires</h3>
          <p>Tu taxi de confianza</p>
        </div>

        {/* Navegación */}
        <nav className="footer-nav">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#sobre-nosotros">Sobre Nosotros</a>
          <a href="#reseñas">Reseñas</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* Contacto */}
        <div className="footer-contact">
          <a href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="footer-icon" />
          </a>
          <a href="mailto:contacto@miempresa.com">
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
          </a>
          <a href="https://instagram.com/XXXXX" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Taxi Baires. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
