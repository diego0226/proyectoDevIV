import { Link } from "react-router-dom";
import type { Apartment } from "../types/Apartments";
import { formatPrice } from "../../shared/utils/formatPrice";
import FavoriteButton from "../../favorites/components/FavoriteButton";
import "./ApartmentCard.css";

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  return (
    <article className="apartment-card">
      <div className="apartment-card__media">
        <img
          src={apartment.image}
          alt={`Foto de ${apartment.name}`}
          loading="lazy"
        />

        <FavoriteButton
          apartmentId={apartment.id}
          apartmentName={apartment.name}
        />
      </div>

      <div className="apartment-card__body">
        <p className="apartment-card__location">{apartment.location}</p>

        <h3 className="apartment-card__name">{apartment.name}</h3>

        <p className="apartment-card__specs">
          {apartment.bedrooms} hab · {apartment.bathrooms}{" "}
          {apartment.bathrooms === 1 ? "baño" : "baños"} · {apartment.area} m²
        </p>

        <div className="apartment-card__footer">
          <p className="apartment-card__price">
            {formatPrice(apartment.price)}
          </p>

          <Link
            className="apartment-card__link"
            to={`/apartamentos/${apartment.id}`}
            aria-label={`Ver detalle de ${apartment.name}`}
          >
            Ver detalle →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ApartmentCard;
