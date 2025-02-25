/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Utils/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth("admin");

  if (isAuthenticated === null) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-[#f7d9cb]">
        Checking authentication...
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/cms" replace />;
};

export default ProtectedRoute;
