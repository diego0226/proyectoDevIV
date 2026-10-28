import { Link } from "react-router-dom";
import { useFetch } from "../../shared/hooks/useFetch";
import ApartmentCardList from "../../apartments/components/ApartmentCardList";
import type { Apartment } from "../../apartments/types/Apartments";
import "./FeaturedApartments.css";

const FeaturedApartments = () => {
  const {
    data: apartments,
    isLoading,
    error,
  } = useFetch<Apartment[]>("/data/apartments.json");

  if (isLoading) {
    return <p className="container">Cargando apartamentos...</p>;
  }

  if (error) {
    return (
      <p role="alert" className="container">
        {error}
      </p>
    );
  }

  const featuredApartments = (apartments ?? [])
    .filter((apartment) => apartment.featured)
    .slice(0, 3);

  if (featuredApartments.length === 0) {
    return null;
  }

  return (
    <section className="featured-apartments container">
      <p>Selección destacada</p>

      <h2>Conozca la colección</h2>

      <Link to="/apartamentos">Ver todos los apartamentos →</Link>

      <ApartmentCardList apartments={featuredApartments} />
    </section>
  );
};

export default FeaturedApartments;
