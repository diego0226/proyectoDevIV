import { Link } from "react-router-dom";
import "./Hero.css";

// Zonas de la colección para la franja animada
const LOCATIONS = [
  "Escazú",
  "Santa Ana",
  "Rohrmoser",
  "Curridabat",
  "Jacó",
  "Tamarindo",
];

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Nácar · Costa Rica</p>

          <h1 className="hero__title">
            <span className="hero__line">
              <span>El apartamento </span>
            </span>
            <span className="hero__line">
              <span>que se ajusta </span>
            </span>
            <span className="hero__line">
              <span>
                <em>a su vida</em>
              </span>
            </span>
          </h1>

          <p className="hero__text">
            Los mejores apartamentos en su región para satisfacer el estilo de vida que usted
            se merece
          </p>

          <div className="hero__actions">
            <Link to="/apartamentos" className="btn btn--primary btn--arrow">
              Explorar apartamentos
            </Link>

            <Link to="/contacto" className="btn btn--outline">
              Contactar
            </Link>
          </div>
        </div>

        <figure className="hero__visual">
          <div className="hero__arch">
            <img
              className="hero__image"
              src="/images/apartments/apartment-01.jpg"
              alt="Sala de un apartamento moderno con ventanales"
            />
          </div>

          <figcaption className="hero__caption">
            <span className="hero__caption-label">Escazú</span>
            Torre Alba 1201
          </figcaption>
        </figure>
      </div>

      <div className="hero__ribbon" aria-hidden="true">
        <div className="hero__ribbon-track">
          {[...LOCATIONS, ...LOCATIONS].map((location, index) => (
            <span key={index}>{location}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
