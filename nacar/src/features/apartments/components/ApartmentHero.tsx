import type { Apartment } from "../types/Apartments";
import "./ApartmentHero.css";

interface ApartmentHeroProps {
  apartment: Apartment;
}

const ApartmentHero = ({ apartment }: ApartmentHeroProps) => {
  return (
    <div className="apartment-hero">
      <img src={apartment.image} alt={`Foto de ${apartment.name}`} />
    </div>
  );
};

export default ApartmentHero;
