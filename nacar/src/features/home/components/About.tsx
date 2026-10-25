import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container about__grid">
        {/* Pendiente: falta la imagen */}
        <div className="about__content">
          <p className="eyebrow">Sobre Nácar</p>
          <h2>Su próximo hogar empieza aquí</h2>

          <p>
            Compare apartamentos, guarde sus favoritos y solicite una visita
            desde la ficha de cada uno.
          </p>

          <Link className="text-link" to="/contacto">
            Consultar un apartamento →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
