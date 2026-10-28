import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container about__grid">
        <figure className="about__media">
          <img
            className="about__image"
            src="/images/apartments/apartment-03.jpg"
            alt="Sala luminosa de un penthouse con vista a la ciudad"
          />
        </figure>

        <div className="about__content reveal">
          <p className="eyebrow">Sobre Nácar</p>
          <h2>
            Su próximo hogar <em>empieza aquí</em>
          </h2>

          <p>
            Compare apartamentos, guarde sus favoritos y solicite una visita
            desde la ficha de cada uno.
          </p>

          <Link className="btn btn--light btn--arrow" to="/contacto">
            Consultar un apartamento
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
