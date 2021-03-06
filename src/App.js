import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import { CLEAR_ALL } from "./utils/actionTypes";

import Header from "./components/Header";
import Container from "./components/Container";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import PagosPage from "./content/PagosPage";
import Home from "./content/Home";
import LoginPage from "./content/LoginPage";
import PacientesPage from "./content/PacientesPage";
import RegistroEmergenciasPage from "./content/RegistroEmergenciasPage";
import UsuariosPage from "./content/UsuariosPage";

const App = ({ loggedIn, logout, name }) => {
  return (
    <>
      <Router>
        <Header logout={logout} loggedIn={loggedIn} name={name}/>
        <Container>
          <Routes>
            <Route
              path="/login"
              element={
                <ProtectedRoute open={!loggedIn} redirecPath={"/home"}>
                  <LoginPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/pagos"
              element={
                <ProtectedRoute open={loggedIn}>
                  <PagosPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/home"
              element={
                <ProtectedRoute open={loggedIn}>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/pacientes"
              element={
                <ProtectedRoute open={loggedIn}>
                  <PacientesPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/registro-emergencias"
              element={
                <ProtectedRoute open={loggedIn}>
                  <RegistroEmergenciasPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/usuarios"
              element={
                <ProtectedRoute open={loggedIn}>
                  <UsuariosPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

const mapStateProps = (state) => ({
  loggedIn: !!state.token.accessToken,
  name: state.profile.username
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: CLEAR_ALL }),
});

export default connect(mapStateProps, mapDispatchToProps)(App);
