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
    activeDeleteSaree,
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
  ]);
  return Data;
};

export default UseHTTPRequest;
