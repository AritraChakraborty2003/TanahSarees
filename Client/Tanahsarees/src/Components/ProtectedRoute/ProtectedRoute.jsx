/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../../Utils/useAuthSystem";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth({ type: "admin" });

  if (loading) return <h2>Loading...</h2>; // ✅ Shows while loading

  return user ? children : <Navigate to="/cms" replace />;
};

export default ProtectedRoute;
