import { useEffect, useState } from "react";
import axios from "axios";

export const useCheckAuth = (triggerAuth) => {
  const [authStatus, setAuthStatus] = useState({
    user: null,
    isAuthenticated: false,
  });

  const getAuthStatus = async () => {
    try {
      const res = await axios.get(`http://localhost:8040/api/v1/auth/profile`, {
        withCredentials: true, // ✅ Ensures cookies are sent
      });

      setAuthStatus({ user: res.data, isAuthenticated: true });
    } catch (error) {
      // ✅ Handle different error types
      if (error.response) {
        // Server responded (e.g., 401, 403)
        setAuthStatus({ user: null, isAuthenticated: false });
      } else if (error.request) {
        // No response (e.g., CORS issue, Network Error)
        console.log(
          "No response received from server. Possible CORS or server issue."
        );
      } else {
        console.log("Request failed:", error.message);
      }
    }
  };

  useEffect(() => {
    getAuthStatus();
  }, [triggerAuth]); // ✅ Trigger on login/logout changes

  return authStatus;
};
