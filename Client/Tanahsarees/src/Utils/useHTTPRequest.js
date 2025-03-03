/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../AppContext/AppContext";

export const UseHTTPRequest = (tigger, route, type, data, category) => {
  const [Data, setData] = useState(null);
  const {
    httpClick,
    setHttpClick,
    httpClickDelete,
    setHttpClickDelete,
    setActiveDeleteSaree,
    favItem,
    setFavItem,
    heartClick,
    setHeartClick,
    activeDeleteSaree,
    PATCHClick,
    setPATCHClick,
    favouriteLength,
    setFavouriteLength,
    heartSave,
    setHeartSave,
    heartItem,
    setHeartItem,
  } = useContext(AppContext);

  useEffect(() => {
    if (type === "GET") {
      axios
        .get(`${import.meta.env.VITE_APP_API_URL}api/v1` + route)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          toast.error("Something went wrong...");
        });
    }

    if (type === "POST" && httpClick) {
      console.log("post request");
      console.log("POST DATA Body Got :", data);
      if (category != "auth") {
        axios
          .post(`${import.meta.env.VITE_APP_API_URL}api/v1` + route, data)
          .then((res) => {
            setData(res.data.message);
            setHttpClick(!httpClick);
            toast.success("Data added successfully!");
          })
          .catch((error) => {
            setData(error);
            setHttpClick(!httpClick);
            toast.error("Something went wrong...");
          });
      } else if (category === "auth") {
        axios
          .post(
            `${import.meta.env.VITE_APP_API_URL_TEST}api/v1` + route,
            data,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            setData(res.data.message);
            setHttpClick(!httpClick);
            toast.success("Logged In Successfully!!!");
          })
          .catch((error) => {
            setData(error);
            setHttpClick(!httpClick);
            toast.error("Something went wrong...");
          });
      }
    }
    if (type === "DELETE" && httpClickDelete && !httpClick) {
      axios
        .delete(
          `${
            import.meta.env.VITE_APP_API_URL
          }api/v1/${category}/data?id=${activeDeleteSaree}`
        )
        .then((res) => {
          setData(res.data.message);
          setHttpClickDelete(!httpClickDelete);
          toast.success("Saree deleted successfully!");
        })
        .catch((error) => {
          setData(error);
          setHttpClickDelete(!httpClickDelete);
          toast.error("Something went wrong...");
        });
    }

    // if (type === "PATCH" && !httpClick && !httpClickDelete && PATCHClick) {

    //   axios
    //     .patch(
    //       `${import.meta.env.VITE_APP_API_URL_TEST}api/v1` + route,
    //       { pid: data },
    //       {
    //         withCredentials: true, // Ensures cookies are sent
    //       }
    //     )
    //     .then((res) => {
    //       if (category === "favourite") {
    //         if (res.data.message === "Duplicate item sent") {
    //           toast.info("Already in Favourites");
    //           setPATCHClick(false);
    //         } else {
    //           toast.success("Favourite added successfully!");
    //           setFavouriteLength(res.data.size);
    //           setPATCHClick(false);
    //         }
    //       } else {
    //         setData(res.data.message);
    //         setPATCHClick(false);

    //         toast.success("User updated successfully!");
    //       }
    //     })
    //     .catch((error) => {
    //       setData(error);
    //       setPATCHClick(false);
    //       toast.error("Something went wrong...");
    //     });
    // }
    if (type === "PATCH" && !httpClick && !httpClickDelete && PATCHClick) {
      axios
        .patch(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1` + route,
          { pid: data },
          {
            withCredentials: true, // Ensures cookies are sent
          }
        )
        .then((res) => {
          console.log("res:", res);
          if (category === "favourite") {
            if (res.data.message === "Duplicate item sent") {
              toast.info("Already in Favourites");
              setPATCHClick(false);
              setHeartSave(!heartSave);
            } else {
              toast.success("Favourite added successfully!");
              setFavouriteLength(res.data.size);
              setPATCHClick(false);
              setHeartSave(!heartSave);
            }
          } else {
            setData(res.data.message);
            setPATCHClick(false);
            setHeartSave(!heartSave);
            toast.success("User updated successfully!");
          }
        })
        .catch((error) => {
          console.log(error);
          setData(error);
          setPATCHClick(false);
          setHeartSave(!heartSave);
          toast.error("Something went wrong...");
        });
    }
    // if (
    //   type === "PATCH" &&
    //   route === "/favourites/heart" &&
    //   !httpClick &&
    //   !httpClickDelete &&
    //   !PATCHClick &&
    //   heartClick
    // ) {
    //   axios
    //     .patch(
    //       `${import.meta.env.VITE_APP_API_URL_TEST}api/v1` + route,
    //       { pid: data },
    //       {
    //         withCredentials: true, // Ensures cookies are sent
    //       }
    //     )
    //     .then((res) => {
    //       if (res.data.message === "Favorite removed") {
    //         setHeartClick(false);
    //         setFavouriteLength(res.data.size);
    //         setHeartSave(true);

    //         setHeartItem("");
    //       } else {
    //         setHeartClick(false);
    //         setFavouriteLength(res.data.size);
    //         setHeartSave(true);
    //         setHeartItem("");
    //       }
    //     })
    //     .catch((error) => {
    //       setData(error);
    //       setPATCHClick(false);
    //       toast.error("Something went wrong...");
    //       setHeartSave(true);
    //       setHeartItem("");
    //     });
    // }
  }, [
    data,
    route,
    tigger,
    type,
    httpClick,
    setHttpClick,
    category,
    httpClickDelete,
    setHttpClickDelete,
    PATCHClick,
    // heartClick,
  ]);
  return Data;
};

export default UseHTTPRequest;
