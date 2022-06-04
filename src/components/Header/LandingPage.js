import React from "react";
import { Link } from "react-router-dom";

const Header = ({ loggedIn, logout, name }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link  to="/home" className="navbar-brand">
            CURAME
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {loggedIn && (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Administración
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      to="/usuarios"
                      className="dropdown-item"
                    >
                      Usuarios
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Urgencias
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      to="/pacientes"
                      className="dropdown-item"
                    >
                      Pacientes
                    </Link>
                    <Link
                      to="/registro-emergencias"
                      className="dropdown-item"
                    >
                      Registro de emergencias
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Finanzas
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      to="/pagos"
                      className="dropdown-item"
                    >
                      Pagos
                    </Link>
                  </div>
                </li>
              </ul>
            )}
            <ul className="navbar-nav ms-auto float-right">
              {!loggedIn && (
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link"
                  >
                    Iniciar sesión
                  </Link>
                </li>
              )}

              {loggedIn && (
                <li className="nav-item dropdown">
                  <a
                    id="navbarDropdown"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {name} <span className="caret"></span>
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      to="/home"
                      className="dropdown-item"
                      onClick={logout}
                    >
                      Cerrar sesión
                    </Link>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
