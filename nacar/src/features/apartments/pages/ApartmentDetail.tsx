import { Link, useParams } from "react-router-dom";
import "./ApartmentDetail.css";
import ApartmentHero from "../components/ApartmentHero";
import ApartmentInfo from "../components/ApartmentInfo";
import ApartmentContactCard from "../components/ApartmentContactCard";
import { useFetch } from "../../shared/hooks/useFetch";
import type { Apartment } from "../types/Apartments";

const ApartmentDetail = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: apartments,
    isLoading,
    error,
  } = useFetch<Apartment[]>("/data/apartments.json");

  const apartment = apartments?.find((item) => item.id === Number(id));

  if (isLoading) {
    return (
      <p className="status-message page-section container">
        Cargando apartamento...
      </p>
    );
  }

  if (error) {
    return (
      <p
        role="alert"
        className="status-message status-message--error page-section container"
      >
        {error}
      </p>
    );
  }

  if (!apartment) {
    return (
      <section className="empty-state page-section container">
        <h1>Apartamento no encontrado</h1>

        <Link className="text-link" to="/apartamentos">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  return (
    <article className="detail-page">
      <ApartmentHero apartment={apartment} />

      <div className="container detail-grid">
        <ApartmentInfo apartment={apartment} />

        <ApartmentContactCard apartment={apartment} />
      </div>
    </article>
  );
};

export default ApartmentDetail;
