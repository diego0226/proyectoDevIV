import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__links" aria-label="Navegación principal">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/apartamentos">Apartamentos</NavLink>
        <NavLink to="/favoritos">Favoritos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
