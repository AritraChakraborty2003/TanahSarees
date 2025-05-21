/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useCheckAuth } from "../../Utils/useCheckAuth";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useCheckAuth(false, "auth"); // 'auth' for user authentication

  if (loading) return <div>Loading...</div>; // Optional loader during auth check

  return isAuthenticated ? (
    children
  ) : (
    <>{toast.error("Not Logged In!!!") && <Navigate to="/" replace />}</>
  );
};

export default ProtectedRoute;
