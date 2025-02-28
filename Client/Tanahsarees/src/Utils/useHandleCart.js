/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const useHandleCart = () => {
  const { cartClick, setCartClick, activeCartId, cartLength, setCartLength } =
    useContext(AppContext);
  useEffect(() => {
    if (cartClick) {
      axios
        .patch(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/cart`,
          {
            pid: activeCartId,
          },
          { withCredentials: true }
        )
        .then((response) => {
          if (response.data.message === "Success") {
            toast.success("Added to cart");
            setCartClick(false);
            setCartLength(response.data.size);
          } else if (response.data.message === "Duplicate item sent") {
            toast.info("Already in the cart");
            setCartClick(false);
          }
        })
        .catch((error) => {
          toast.info("Something went wrong");
          setCartClick(false);
        });
    }
  }, [cartClick, setCartClick]);
};

export { useHandleCart };
