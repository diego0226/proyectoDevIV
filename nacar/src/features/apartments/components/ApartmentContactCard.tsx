import { Link } from "react-router-dom";
import type { Apartment } from "../types/Apartments";
import { formatPrice } from "../../shared/utils/formatPrice";
import FavoriteButton from "../../favorites/components/FavoriteButton";
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

      
      <Link
        className="btn btn--primary apartment-contact-card__button"
        to={`/contacto?propiedad=${apartment.id}`}
      >
        Solicitar una visita
      </Link>

      <FavoriteButton
        apartmentId={apartment.id}
        apartmentName={apartment.name}
        variant="full"
      />
    </aside>
  );
};

export default ApartmentContactCard;
