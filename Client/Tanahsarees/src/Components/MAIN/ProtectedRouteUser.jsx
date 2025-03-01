/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useCheckAuth } from "../../Utils/useCheckAuth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useCheckAuth(false, "auth"); // 'auth' for user authentication

  if (loading) return <div>Loading...</div>; // Optional loader during auth check

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
