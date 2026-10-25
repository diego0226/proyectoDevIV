import { useMemo, useState } from "react";
import ApartmentCardList from "../components/ApartmentCardList";
import FilterBar from "../components/FilterBar";
import Pagination from "../../shared/components/Pagination";
import { useFetch } from "../../shared/hooks/useFetch";
import { normalizeText } from "../../shared/utils/normalizeText";
import type { Apartment, ApartmentFilters } from "../types/Apartments";
import "./Apartments.css";

const ITEMS_PER_PAGE = 5;

const INITIAL_FILTERS: ApartmentFilters = {
  search: "",
  location: "",
  bedrooms: 0,
  maxPrice: null,
};

const Apartments = () => {
  const {
    data: apartments,
    isLoading,
    error,
  } = useFetch<Apartment[]>("/data/apartments.json");

  const [filters, setFilters] = useState<ApartmentFilters>(INITIAL_FILTERS);
  const [currentPage, setCurrentPage] = useState(1);

  // Ubicaciones sin repetir y en orden alfabético para el select de FilterBar
  const locations = useMemo(() => {
    const allLocations = (apartments ?? []).map(
      (apartment) => apartment.location,
    );
    return [...new Set(allLocations)].sort();
  }, [apartments]);

  // filter() devuelve un arreglo nuevo, así que el arreglo original no se modifica.
  // useMemo evita repetir el cálculo si ni los datos ni los filtros cambiaron.
  const filteredApartments = useMemo(() => {
    const search = normalizeText(filters.search.trim());

    return (apartments ?? []).filter((apartment) => {
      const searchableText = normalizeText(
        [apartment.name, apartment.location, ...apartment.amenities].join(" "),
      );

      const matchesSearch = searchableText.includes(search);
      const matchesLocation =
        filters.location === "" || apartment.location === filters.location;
      const matchesBedrooms = apartment.bedrooms >= filters.bedrooms;
      const matchesPrice =
        filters.maxPrice === null || apartment.price <= filters.maxPrice;

      return (
        matchesSearch && matchesLocation && matchesBedrooms && matchesPrice
      );
    });
  }, [apartments, filters]);

  const totalPages = Math.ceil(filteredApartments.length / ITEMS_PER_PAGE);

  // Los 5 apartamentos de la página actual
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedApartments = filteredApartments.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // Al cambiar un filtro se vuelve a la página 1, porque la página actual podría ya no existir
  const handleFiltersChange = (newFilters: ApartmentFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleReset = () => {
    handleFiltersChange(INITIAL_FILTERS);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <p className="apartments-page__status" role="status">
          Cargando apartamentos...
        </p>
      );
    }

    // Se muestra un mensaje claro en vez del error técnico del navegador
    if (error) {
      return (
        <p
          className="apartments-page__status apartments-page__status--error"
          role="alert"
        >
          No se pudieron cargar los apartamentos. Intente de nuevo más tarde.
        </p>
      );
    }

    if (filteredApartments.length === 0) {
      return (
        <div className="apartments-page__empty">
          <h2>No encontramos apartamentos</h2>
          <p>Pruebe con otra búsqueda o quite algunos filtros.</p>
          <button
            type="button"
            className="btn btn--primary"
            onClick={handleReset}
          >
            Limpiar filtros
          </button>
        </div>
      );
    }

    return (
      <>
        <p className="apartments-page__count">
          {filteredApartments.length === 1
            ? "1 apartamento encontrado"
            : `${filteredApartments.length} apartamentos encontrados`}
        </p>

        <ApartmentCardList apartments={paginatedApartments} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </>
    );
  };

  return (
    <section className="apartments-page container">
      <header className="apartments-page__header">
        <p className="apartments-page__eyebrow">Catálogo Nácar</p>
        <h1>Apartamentos</h1>
        <p>
          Explore nuestra colección y filtre por ubicación, habitaciones o
          precio.
        </p>
      </header>

      <FilterBar
        filters={filters}
        locations={locations}
        onFiltersChange={handleFiltersChange}
        onReset={handleReset}
      />

      {renderContent()}
    </section>
  );
};

export default Apartments;
