import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";

import "./_landing-page.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import axios from "axios";
import TablePayments from "../../components/Table/TablePayments";

const paymentsReducer = (state, action) => {
  if (action.type === "PAYMENTS") {
    return { value: action.val, has: true };
  }
  return { value: [], has: false };
};

const PagosPage = ({ token }) => {
  const base_uri = process.env.REACT_APP_BASE_URI;
  const path_payments = process.env.REACT_APP_URI_PATH_FINANZAS;
  const [paymentsState, dispatchPayments] = useReducer(paymentsReducer, {
    value: [],
    isValid: false,
  });

  const getPayments = async () => {
    const { data } = await axios.get(base_uri + path_payments + "payments", {
      timeout: 2 * 6 * 1000,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    dispatchPayments({ type: "PAYMENTS", val: data });
  };

  useEffect(() => {
    getPayments();
  }, []);

  return (
    <>
      <div className="card mt-4">
        <div className="card-body">
          <div className="clearfix">
            <h3 className="float-start mb-0">Pagos</h3>
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
          {!paymentsState.has && (
            <h3 className="text-center">No hay datos por mostrar.</h3>
          )}
          {paymentsState.has && <TablePayments rows={paymentsState.value} />}
        </div>
      </div>
    </>
  );
};

const mapStateProps = (state) => ({
  token: state.token.accessToken,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateProps, mapDispatchToProps)(PagosPage);
