import type { Apartment } from "../types/Apartments";
import "./ApartmentHero.css";

interface ApartmentHeroProps {
  apartment: Apartment;
}

const ApartmentHero = ({ apartment }: ApartmentHeroProps) => {
  return (
    <div className="apartment-hero">
      <div className="apartment-hero__media">
        <img src={apartment.image} alt={`Foto de ${apartment.name}`} />
      </div>
    </div>
  );
};

export default ApartmentHero;
