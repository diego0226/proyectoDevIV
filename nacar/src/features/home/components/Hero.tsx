import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__media">
        <img
          className="hero__image"
          src="/images/apartments/apartment-13.jpg"
          alt="Piscina infinita frente al océano Pacífico"
          fetchPriority="high"
        />
      </div>

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
            <Link to="/apartamentos" className="btn btn--light btn--arrow">
              Explorar apartamentos
            </Link>

            <Link to="/contacto" className="btn btn--ghost">
              Contactar
            </Link>
          </div>
        </div>

        <p className="hero__caption">
          <span className="hero__caption-label">Jacó · Pacífico</span>
          Marea Alta 1002
        </p>
      </div>
    </section>
  );
};

export default Hero;
