import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  // Con una sola página no hace falta mostrar la paginación
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="pagination" aria-label="Paginación">
      <button
        type="button"
        className="btn btn--outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Anterior
      </button>

      <ul className="pagination__pages">
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={
                page === currentPage
                  ? "pagination__page pagination__page--active"
                  : "pagination__page"
              }
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? "page" : undefined}
              aria-label={`Página ${page}`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="btn btn--outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente →
      </button>
    </nav>
  );
};

export default Pagination;
