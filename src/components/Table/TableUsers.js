import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";

const TableUsers = ({ rows }) => {
  if (rows.length === 0) {
    return <></>;
  }
  return (
    <>
      <table className="table mb-0">
        <thead className="thead-light">
          <th>Username</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo electrónico</th>
          <th>Perfil</th>
          <th>Rol</th>
          <th className="no-stretch"></th>
        </thead>
        <tbody>
          {rows.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.profiles[0].profileName}</td>
                <td>{user.roles[0].roleName}</td>
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

export default TableUsers;
