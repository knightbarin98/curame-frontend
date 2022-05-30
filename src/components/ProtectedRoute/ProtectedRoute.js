import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ open, redirecPath = "/login" , children }) => {
  if(!open) {
     return <Navigate to={redirecPath} replace/>
  }
  return children
};

export default ProtectedRoute;
