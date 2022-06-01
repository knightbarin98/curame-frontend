import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";

import "./_landing-page.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import axios from "axios";
import TablePayments from "../../components/Table/TablePayments";

const emergencyRecordsReducer = (state, action) => {
  if (action.type === "EMERGENCY_RECORDS") {
    return { value: action.val, has: true };
  }
  return { value: [], has: false };
};

const RegistroEmergenciasPage = ({ token }) => {
  const base_uri = process.env.REACT_APP_BASE_URI;
  const path_er = process.env.REACT_APP_URI_PATH_URGENCIAS;
  const [erState, dispatchEmergencyRecords] = useReducer(emergencyRecordsReducer, {
    value: [],
    isValid: false,
  });

  const getERs = async () => {
    const { data } = await axios.get(base_uri + path_er + "emergency-records", {
      timeout: 2 * 6 * 1000,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    dispatchEmergencyRecords({ type: "EMERGENCY_RECORDS", val: data });
  };

  useEffect(() => {
    getERs();
  }, []);

  return (
    <>
      <div className="card mt-4">
        <div className="card-body">
          <div className="clearfix">
            <h3 className="float-start mb-0">Registros de emergencia</h3>
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
          {!erState.has && (
            <h3 className="text-center">No hay datos por mostrar.</h3>
          )}
          {/* {erState.has && <TablePayments rows={erState.value} />} */}
        </div>
      </div>
    </>
  );
};

const mapStateProps = (state) => ({
  token: state.token.accessToken,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateProps, mapDispatchToProps)(RegistroEmergenciasPage);
