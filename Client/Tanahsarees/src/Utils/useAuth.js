import { useState, useEffect } from "react";
import axios from "axios";

export const useAuth = (type) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/${type}/profile`,
          {
            withCredentials: true, // ✅ Ensures cookies are sent
          }
        );
        setIsAuthenticated(res.data.isAuthenticated);
        setRole(res.data.role);
      } catch (error) {
        setIsAuthenticated(false);
        console.log(error);
      }
    };

    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAuthenticated, role };
};
