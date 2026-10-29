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
    return (
      <p className="container status-message featured-apartments__status">
        Cargando apartamentos...
      </p>
    );
  }

  if (error) {
    return (
      <p
        role="alert"
        className="container status-message status-message--error featured-apartments__status"
      >
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
    <section className="featured-apartments">
      <div className="container">
        <header className="featured-apartments__head reveal">
          <div>
            <p className="eyebrow">Selección destacada</p>

            <h2>
              Conozca <em>la colección</em>
            </h2>
          </div>

          <Link className="text-link" to="/apartamentos">
            Ver todos los apartamentos <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </header>

        <ApartmentCardList apartments={featuredApartments} />
      </div>
    </section>
  );
};

export default FeaturedApartments;
