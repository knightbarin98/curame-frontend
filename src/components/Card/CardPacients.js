import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useState } from "react";

const TableERs = ({ pacient }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="card m-3">
        <div className="card-body">
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <span>
                <b>Nombre: </b>
                {pacient.firstname}
              </span>
            </div>
            <div className="p-2 bd-highlight">
              <span>
                <b>Apellido: </b>
                {pacient.lastname}
              </span>
            </div>
            <div className="p-2 bd-highlight">
              <span>
                <b>Dirección: </b>
                {pacient.address}
              </span>
            </div>
            <div className="p-2 bd-highlight">
              <span>
                <b>Colonia: </b>
                {pacient.neighborhood}
              </span>
            </div>
            <div className="p-2 bd-highlight">
              <span>
                <b>Código postal: </b>
                {pacient.zipCode}
              </span>
            </div>
            <div className="p-2 bd-highlight">
              <button type="button" className="btn btn-sm light">
                {show && <FontAwesomeIcon icon={solid("angle-up")} />}
                {!show && <FontAwesomeIcon icon={solid("angle-down")} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableERs;
