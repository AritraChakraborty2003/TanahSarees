/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const useHandleHeart = () => {
  const {
    heartClick,
    setHeartClick,
    heartSave,
    setHeartSave,
    heartItem,
    setHeartItem,
    favouriteLength,
    setFavouriteLength,
  } = useContext(AppContext);

  useEffect(() => {
    if (heartClick) {
      console.log("heart clicked", heartItem);
      axios
        .patch(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/favourites/heart`,
          { pid: heartItem },
          { withCredentials: true }
        )
        .then((response) => {
          if (response.data.message === "Success") {
            setHeartClick(false);
            setHeartSave(!heartSave);
            setFavouriteLength(response.data.size);
          } else {
            setHeartClick(false);
            setHeartSave(!heartSave);
            setFavouriteLength(response.data.size);
          }
        })
        .catch((error) => {
          toast.info("Something went wrong");
          setHeartClick(false);
        });

      setHeartClick(false);
    }
  }, [heartClick, setHeartClick]);
};

export default useHandleHeart;
