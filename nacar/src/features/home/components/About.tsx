import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__intro reveal">
          <div className="about__heading">
            <p className="eyebrow">Sobre Nácar</p>
            <h2>
              Su próximo hogar <em>empieza aquí</em>
            </h2>
          </div>

          <div className="about__content">
            <p>
              Compare apartamentos, guarde sus favoritos y solicite una visita
              desde la ficha de cada uno.
            </p>

            <Link className="btn btn--light btn--arrow" to="/contacto">
              Consultar un apartamento
            </Link>
          </div>
        </div>

        <figure className="about__media">
          <img
            className="about__image"
            src="/images/apartments/apartment-03.jpg"
            alt="Sala luminosa de un penthouse con vista a la ciudad"
            loading="lazy"
          />

          <figcaption className="about__caption">
            <span>Escazú</span>
            Penthouse Mirador
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default About;
