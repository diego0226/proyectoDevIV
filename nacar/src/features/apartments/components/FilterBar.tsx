import type { ChangeEvent, FormEvent } from "react";
import type { ApartmentFilters } from "../types/Apartments";
import "./FilterBar.css";

interface FilterBarProps {
  filters: ApartmentFilters;
  locations: string[];
  onFiltersChange: (filters: ApartmentFilters) => void;
  onReset: () => void;
}

// Opciones fijas de los selects
const BEDROOM_OPTIONS = [1, 2, 3, 4];
const MAX_PRICE_OPTIONS = [300000, 500000, 750000, 1000000];

const FilterBar = ({
  filters,
  locations,
  onFiltersChange,
  onReset,
}: FilterBarProps) => {
  // Cada handler copia los filtros actuales y cambia solo un campo
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, search: event.target.value });
  };

  const handleLocationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({ ...filters, location: event.target.value });
  };

  const handleBedroomsChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({ ...filters, bedrooms: Number(event.target.value) });
  };

  const handleMaxPriceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onFiltersChange({
      ...filters,
      maxPrice: value === "" ? null : Number(value),
    });
  };

  // Los filtros se aplican mientras se escribe, así que Enter no debe recargar la página
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="filter-bar" role="search" onSubmit={handleSubmit}>
      <div className="filter-bar__field filter-bar__field--search">
        <label htmlFor="filter-search">Buscar</label>
        <input
          id="filter-search"
          type="search"
          placeholder="Nombre, ubicación o amenidad"
          value={filters.search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="filter-bar__field">
        <label htmlFor="filter-location">Ubicación</label>
        <select
          id="filter-location"
          value={filters.location}
          onChange={handleLocationChange}
        >
          <option value="">Todas</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-bar__field">
        <label htmlFor="filter-bedrooms">Habitaciones</label>
        <select
          id="filter-bedrooms"
          value={filters.bedrooms}
          onChange={handleBedroomsChange}
        >
          <option value={0}>Cualquiera</option>
          {BEDROOM_OPTIONS.map((bedrooms) => (
            <option key={bedrooms} value={bedrooms}>
              {bedrooms}+
            </option>
          ))}
        </select>
      </div>

      <div className="filter-bar__field">
        <label htmlFor="filter-price">Precio máximo</label>
        <select
          id="filter-price"
          value={filters.maxPrice ?? ""}
          onChange={handleMaxPriceChange}
        >
          <option value="">Sin límite</option>
          {MAX_PRICE_OPTIONS.map((price) => (
            <option key={price} value={price}>
              USD {price.toLocaleString("es-CR")}
            </option>
          ))}
        </select>
      </div>

      <button type="button" className="btn btn--outline" onClick={onReset}>
        Limpiar
      </button>
    </form>
  );
};

export default FilterBar;
