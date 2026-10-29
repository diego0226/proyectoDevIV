import { Link } from "react-router-dom";
import type { Apartment } from "../types/Apartments";
import "./ApartmentInfo.css";

interface ApartmentInfoProps {
  apartment: Apartment;
}

const ApartmentInfo = ({ apartment }: ApartmentInfoProps) => {
  return (
    <section className="apartment-info">
      <Link className="text-link apartment-info__back" to="/apartamentos">
        <span className="arrow arrow--back" aria-hidden="true">←</span> Volver a
        apartamentos
      </Link>

      <p className="eyebrow apartment-info__location">{apartment.location}</p>

      <h1 className="apartment-info__title">{apartment.name}</h1>

      <dl className="apartment-info__specs">
        <div>
          <dt>habitaciones</dt>
          <dd>{apartment.bedrooms}</dd>
        </div>

        <div>
          <dt>baños</dt>
          <dd>{apartment.bathrooms}</dd>
        </div>

        <div>
          <dt>m²</dt>
          <dd>{apartment.area.toLocaleString("es-CR")}</dd>
        </div>
      </dl>

      <div className="apartment-info__block reveal">
        <h2>Descripción</h2>

        <p className="apartment-info__description">{apartment.description}</p>
      </div>

      <div className="apartment-info__block reveal">
        <h2>Amenidades</h2>

        <ul className="apartment-info__amenities">
          {apartment.amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ApartmentInfo;
