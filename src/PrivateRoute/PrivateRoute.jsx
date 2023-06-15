import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function PrivateRoute({ children }) {
  const { token, setToken } = useContext(AuthContext);

  return token ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
