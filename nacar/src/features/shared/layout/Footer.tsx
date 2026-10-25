import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  // Esta función lo que hacce es que calcula para que el copyright no quede desactualizado
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Nácar — Inicio">
            Nácar
          </Link>
          <p>
            Apartamentos de lujo en Costa Rica, del Valle Central a las playas
            del Pacífico.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Navegación del pie de página">
          <h2>Explorar</h2>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/apartamentos">Apartamentos</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>

        <div className="footer__cta">
          <h2>¿Le interesa un apartamento?</h2>
          <p>Escríbanos y coordinamos una visita sin compromiso.</p>
          <Link to="/contacto" className="footer__cta-link">
            Solicitar una visita →
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {currentYear} Nácar. Proyecto académico, UCR Sede de Occidente.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
