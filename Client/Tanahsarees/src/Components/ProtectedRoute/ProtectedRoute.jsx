/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext"; // Adjust the path if needed
import { useCheckAuth } from "../../Utils/useCheckAuth";

const ProtectedRoute = ({ children }) => {
  const [tigger_auth, set_tigger_auth] = useState(false);
  const { isAdminLogin } = useContext(AppContext);
  const data = useCheckAuth(tigger_auth, "admin");

  return isAdminLogin ? children : <Navigate to="/cms" replace />;
};

export default ProtectedRoute;
