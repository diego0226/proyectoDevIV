import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      {/* Número decorativo de fondo; aria-hidden evita que el lector de pantalla lo lea */}
      <span className="not-found__code" aria-hidden="true">
        404
      </span>

      <h1 className="not-found__title" id="not-found-title">
        Esta página no existe
      </h1>

      <p className="not-found__text">
        La dirección puede haber cambiado o estar mal escrita. Vuelva al inicio
        o explore nuestros apartamentos.
      </p>

      <div className="not-found__actions">
        <Link className="btn btn--primary" to="/">
          Volver al inicio
        </Link>

        <Link className="btn btn--outline" to="/apartamentos">
          Explorar apartamentos
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
