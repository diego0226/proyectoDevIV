import { Link } from "react-router-dom";
import type { Apartment } from "../types/Apartments";
import "./ApartmentInfo.css";

interface ApartmentInfoProps {
  apartment: Apartment;
}

const ApartmentInfo = ({ apartment }: ApartmentInfoProps) => {
  return (
    <section className="apartment-info">
      <Link to="/apartamentos">← Volver a apartamentos</Link>

      <p>{apartment.location}</p>

      <h1>{apartment.name}</h1>

      <div className="apartment-info__specs">
        <span>
          <strong>{apartment.bedrooms}</strong> habitaciones
        </span>

        <span>
          <strong>{apartment.bathrooms}</strong> baños
        </span>

        <span>
          <strong>{apartment.area.toLocaleString("es-CR")}</strong> m²
        </span>
      </div>

      <h2>Descripción</h2>

      <p>{apartment.description}</p>

      <h2>Amenidades</h2>

      <ul className="apartment-info__amenities">
        {apartment.amenities.map((amenity) => (
          <li key={amenity}>✓ {amenity}</li>
        ))}
      </ul>
    </section>
  );
};

export default ApartmentInfo;
