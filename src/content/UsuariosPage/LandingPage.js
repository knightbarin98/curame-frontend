import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";

import "./_landing-page.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import axios from "axios";
import TableUsers from "../../components/Table/TableUsers";

const usersReducer = (state, action) => {
  if (action.type === "USERS") {
    return { value: action.val, has: true };
  }
  return { value: [], has: false };
};

const UsuariosPage = ({ token }) => {
  const base_uri = process.env.REACT_APP_BASE_URI;
  const path_users = process.env.REACT_APP_URI_PATH_USUARIOS;
  const [usersState, dispatchUsers] = useReducer(usersReducer, {
    value: [],
    isValid: false,
  });

  const getUsuarios = async () => {
    const { data } = await axios.get(base_uri + path_users + "users", {
      timeout: 2 * 6 * 1000,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    dispatchUsers({ type: "USERS", val: data });
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <>
      <div className="card mt-4">
        <div className="card-body">
          <div className="clearfix">
            <h3 className="float-start mb-0">Usuarios</h3>
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
        {!usersState.has && (
                <h3 className="text-center">No hay datos por mostrar.</h3>
              )}
        {usersState.has && (
                <TableUsers rows={usersState.value}/>
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

export default connect(mapStateProps, mapDispatchToProps)(UsuariosPage);
