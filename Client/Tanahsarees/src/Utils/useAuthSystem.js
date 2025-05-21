/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../AppContext/AppContext";

const useAuth = ({ type }) => {
  const { isAdminLogin, setIsAdminLogin } = useContext(AppContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/${type}/profile`,
          { withCredentials: true }
        );
        setUser(data);
        setIsAdminLogin(true);
      } catch (error) {
        setUser(null);
        setIsAdminLogin(false);
      } finally {
        setLoading(false); // ✅ Mark loading as complete
        setIsAdminLogin(true);
      }
    };

    fetchUser();
  }, [type]); // ✅ Run only when `type` changes

  const login = async (email, password) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/${type}/login`,
        { email, password },
        { withCredentials: true }
      );
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/${type}/profile`,
        { withCredentials: true }
      );
      setUser(data);
      setIsAdminLogin(true);
      return true;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setIsAdminLogin(false);
      return false;
    }
  };

  const logout = async () => {
    await axios.post(
      `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/${type}/logout`,
      {},
      { withCredentials: true }
    );
    setUser(null);
    setIsAdminLogin(false);
  };

  return { user, loading, login, logout }; // ✅ Return loading state
};

export default useAuth;
