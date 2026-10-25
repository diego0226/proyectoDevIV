import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Nácar · Costa Rica</p>

          <h1 className="hero__title">El apartamento que se ajusta a su vida</h1>

          <p className="hero__text">
            Los mejores apartamentos en su región para satisfacer el estilo de vida que usted
            se merece
          </p>

          <div className="hero__actions">
            <Link to="/apartamentos" className="btn btn--primary">
              Explorar apartamentos
            </Link>

            <Link to="/contacto" className="btn btn--outline">
              Contactar
            </Link>
          </div>
        </div>

        {/* Pendiente: falta la imagen (esperar las imágenes de Diego) */}
      </div>
    </section>
  );
};

export default Hero;
