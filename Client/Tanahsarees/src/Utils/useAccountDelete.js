/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../AppContext/AppContext";
export const useAccountDelete = () => {
  const { clickDeleteAccount, setclickDeleteAccount } = useContext(AppContext);
  // Your logic here
  const deleteAccount = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/users`,
        {
          withCredentials: true,
        }
      );

      if (res.data.message === "User deleted successfully") {
        toast.success("Account deleted successfully");
        setclickDeleteAccount(false);
        window.location.href = "/";
      } else {
        toast.error("Failed to delete account");
        setclickDeleteAccount(false); // Reset the flag after deletion failed
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error("Failed to delete account");
      setclickDeleteAccount(false); // Reset the flag after deletion failed
      window.location.href = "/";
    }
  };

  useEffect(() => {
    if (clickDeleteAccount) {
      deleteAccount();
    }
  }, [clickDeleteAccount]);
};
