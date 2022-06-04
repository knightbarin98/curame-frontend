import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";

import "./_landing-page.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import axios from "axios";
import TableERs from "../../components/Table/TableERs";

const pacientsReducer = (state, action) => {
  if (action.type === "PACIENTS") {
    return { value: action.val, has: true };
  }
  return { value: [], has: false };
};

const PacientesPage = ({ token }) => {
  const base_uri = process.env.REACT_APP_BASE_URI;
  const path_er = process.env.REACT_APP_URI_PATH_URGENCIAS;
  const [pacientState, dispatchPacients] = useReducer(pacientsReducer, {
    value: [],
    isValid: false,
  });

  const getPacients = async () => {
    const { data } = await axios.get(base_uri + path_er + "pacients", {
      timeout: 2 * 6 * 1000,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    dispatchPacients({ type: "PACIENTS", val: data });
  };

  useEffect(() => {
    getPacients();
  }, []);

  return (
    <>
      <div className="card mt-4">
        <div className="card-body">
          <div className="clearfix">
            <h3 className="float-start mb-0">Pacientes</h3>
            <button className="float-end btn btn-sm btn-success">
              <FontAwesomeIcon icon={solid("save")} />
              Registrar
            </button>
          </div>
          <hr className="mt-1" />
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          {!pacientState.has && (
            <h3 className="text-center">No hay datos por mostrar.</h3>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateProps = (state) => ({
  token: state.token.accessToken,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateProps, mapDispatchToProps)(PacientesPage);
