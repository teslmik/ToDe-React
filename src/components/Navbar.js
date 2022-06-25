import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand ms-3">ToDo App</div>

    <ul className="navbar-nav me-3">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          Информация
        </NavLink>
      </li>
    </ul>
  </nav>
);
