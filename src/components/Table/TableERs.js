import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";

const TableERs = ({ rows }) => {
  if (rows.length === 0) {
    return <></>;
  }
  return (
    <>
      <table className="table mb-0">
        <thead className="thead-light">
          <th>Paciente</th>
          <th>¿Tiene alergias?</th>
          <th>Alergias</th>
          <th>NSS</th>
          <th>Código de seguro</th>
          <th>Compañia de seguro</th>
          <th>Resumen de diagnóstico</th>
          <th className="no-stretch"></th>
        </thead>
        <tbody>
          {rows.map((er) => {
            return (
              <tr key={er.id}>
                <td>{er.pacient.firstname} {er.pacient.lastname}</td>
                <td className="text-center">{er.allergies ? 'Si' : 'No'}</td>
                <td>{er.allergiesDescription? er.allergiesDescription : 'Ninguna'}</td>
                <td>{er.nss}</td>
                <td>{er.insuranceCode ? er.insuranceCode : 'Ninguno'}</td>
                <td className="text-center">{er.insuranceCompany ? er.insuranceCompany : 'Ninguno'}</td>
                <td>{er.diagnosticReview}</td>
                <td className="no-stretch">
                  <button type="button" className="btn btn-sm btn-primary">
                    <FontAwesomeIcon icon={solid("edit")} />
                  </button>

                  <button type="button" className="btn btn-sm btn-danger">
                    <FontAwesomeIcon icon={solid("trash")} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableERs;
