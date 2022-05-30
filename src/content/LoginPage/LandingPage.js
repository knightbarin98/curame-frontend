import React from "react";

import "./_landing-page.scss";

const LoginPage = () => {
  return (
    <>
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Iniciar sesión</div>

            <div className="card-body">
              <form>
                <div className="form-group row">
                  <label
                    htmlFor="email"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Correo electrónico
                  </label>

                  <div className="col-md-6">
                    <input
                      id="email"
                      type="text"
                      className="form-control"
                      name="email"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="password"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Contraseña
                  </label>

                  <div className="col-md-6">
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-6 offset-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                        id="remember"
                      />

                      <label className="form-check-label" htmlFor="remember">
                        Recordar credenciales
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group row mb-0">
                  <div className="col-md-8 offset-md-4">
                    <button className="btn btn-primary">Iniciar sesión</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
