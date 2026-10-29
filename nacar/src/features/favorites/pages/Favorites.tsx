import { Link } from "react-router-dom";
import ApartmentCardList from "../../apartments/components/ApartmentCardList";
import { useFetch } from "../../shared/hooks/useFetch";
import type { Apartment } from "../../apartments/types/Apartments";
import { useFavorites } from "../context/useFavorites";
import "./Favorites.css";

const Favorites = () => {
  const {
    data: apartments,
    isLoading,
    error,
  } = useFetch<Apartment[]>("/data/apartments.json");

  const { favorites } = useFavorites();

  
  const favoriteApartments = (apartments ?? []).filter((apartment) =>
    favorites.includes(apartment.id),
  );

  const renderContent = () => {
    if (isLoading) {
      return (
        <p className="favorites-page__status" role="status">
          Cargando favoritos...
        </p>
      );
    }

    if (error) {
      return (
        <p
          className="favorites-page__status favorites-page__status--error"
          role="alert"
        >
          No se pudieron cargar sus favoritos. Intente de nuevo más tarde.
        </p>
      );
    }

    if (favoriteApartments.length === 0) {
      return (
        <div className="favorites-page__empty">
          <h2>Aún no tiene favoritos</h2>
          <p>
            Toque el corazón de cualquier apartamento para guardarlo aquí y
            compararlo cuando quiera.
          </p>
          <Link to="/apartamentos" className="btn btn--primary">
            Explorar apartamentos
          </Link>
        </div>
      );
    }

    return (
      <>
        <p className="favorites-page__count">
          {favoriteApartments.length === 1
            ? "1 apartamento guardado"
            : `${favoriteApartments.length} apartamentos guardados`}
        </p>

        <ApartmentCardList apartments={favoriteApartments} />
      </>
    );
  };

  return (
    <section className="favorites-page container">
      <header className="favorites-page__header">
        <h1>Favoritos</h1>
        <p>Los apartamentos que guardó para revisar y comparar con calma.</p>
      </header>

      {renderContent()}
    </section>
  );
};

export default Favorites;
