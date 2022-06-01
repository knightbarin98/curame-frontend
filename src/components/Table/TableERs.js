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
          <th>Tipo de pago</th>
          <th>Concepto</th>
          <th>RFC</th>
          <th>Factura</th>
          <th>Subtotal</th>
          <th>Total</th>
          <th className="no-stretch"></th>
        </thead>
        <tbody>
          {rows.map((payment) => {
            return (
              <tr key={payment.id}>
                <td>{payment.pacient.firstname} {payment.pacient.lastname}</td>
                <td>{payment.paymentType.name}</td>
                <td>{payment.concept.name}</td>
                <td>{payment.rfc}</td>
                <td>{payment.voice? 'SI': 'NO'}</td>
                <td>{payment.subtotal}</td>
                <td>{payment.total}</td>
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
