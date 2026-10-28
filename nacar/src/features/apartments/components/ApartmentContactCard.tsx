import { Link } from "react-router-dom";
import type { Apartment } from "../types/Apartments";
import { formatPrice } from "../../shared/utils/formatPrice";
import "./ApartmentContactCard.css";

interface ApartmentContactCardProps {
  apartment: Apartment;
}

const ApartmentContactCard = ({ apartment }: ApartmentContactCardProps) => {
  return (
    <aside className="apartment-contact-card">
      <p className="apartment-contact-card__label">Precio de venta</p>

      <h2 className="apartment-contact-card__price">
        {formatPrice(apartment.price)}
      </h2>

      <p className="apartment-contact-card__description">
        Agende una visita privada y reciba asesoría personalizada, sin
        compromiso.
      </p>

      {/* El id viaja en la URL para que el formulario de contacto quede prellenado */}
      <Link
        className="btn btn--primary apartment-contact-card__button"
        to={`/contacto?propiedad=${apartment.id}`}
      >
        Solicitar una visita
      </Link>
    </aside>
  );
};

export default ApartmentContactCard;
