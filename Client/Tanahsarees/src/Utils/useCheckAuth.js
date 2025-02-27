/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../AppContext/AppContext";

export const useCheckAuth = (triggerAuth, type) => {
  const { setIsUserLogin, setUserInfo, setIsAdminLogin, setAdminInfo } =
    useContext(AppContext);

  const [authStatus, setAuthStatus] = useState({
    user: null,
    isAuthenticated: false,
  });

  const getAuthStatus = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/${type}/profile`,
        {
          withCredentials: true, // ✅ Ensures cookies are sent
        }
      );

      setAuthStatus({ user: res.data, isAuthenticated: true });

      if (type === "auth") {
        setUserInfo(res.data);
        setIsUserLogin(true);
      } else {
        setAdminInfo(res.data);
        setIsAdminLogin(true);
      }
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
