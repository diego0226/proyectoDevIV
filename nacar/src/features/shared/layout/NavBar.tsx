import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* Pendiente: falta el componente Logo, mientras tanto se usa logo.svg */}
        <NavLink
          to="/"
          className="navbar__brand"
          aria-label="Nácar — Inicio"
          onClick={closeMenu}
        >
          <img src={logo} alt="Nácar" />
        </NavLink>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <nav
          className={isOpen ? "navbar__links navbar__links--open" : "navbar__links"}
          aria-label="Navegación principal"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/apartamentos"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Apartamentos
          </NavLink>

          <NavLink
            to="/favoritos"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Favoritos
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
