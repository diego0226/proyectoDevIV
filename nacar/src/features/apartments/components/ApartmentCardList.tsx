import type { Apartment } from "../types/Apartments";
import ApartmentCard from "./ApartmentCard";
import "./ApartmentCardList.css";

interface ApartmentCardListProps {
  apartments: Apartment[];
}

const ApartmentCardList = ({ apartments }: ApartmentCardListProps) => {
  return (
    <ul className="apartment-card-list">
      {apartments.map((apartment) => (
        <li key={apartment.id}>
          <ApartmentCard apartment={apartment} />
        </li>
      ))}
    </ul>
  );
};

export default ApartmentCardList;
