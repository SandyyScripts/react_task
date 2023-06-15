import React, { useState } from "react";
import BasicTable from "./components/BasicTable";
import Login from "./components/Login";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const getLocalToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return false;
  }
};

function App() {
  const [token, setToken] = useState(getLocalToken());

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <BasicTable />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
