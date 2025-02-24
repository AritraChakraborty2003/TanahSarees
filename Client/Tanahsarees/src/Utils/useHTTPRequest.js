/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../AppContext/AppContext";

export const UseHTTPRequest = (tigger, route, type, data, category) => {
  const [Data, setData] = useState(null);
  const { httpClick, setHttpClick } = useContext(AppContext);

  useEffect(() => {
    if (type === "GET") {
      axios
        .get(`${import.meta.env.VITE_APP_API_URL_TEST}api/v1` + route)
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
          .post(`${import.meta.env.VITE_APP_API_URL_TEST}api/v1` + route, data)
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
      } else {
        axios
          .post(
            `${import.meta.env.VITE_APP_API_URL_TEST}api/v1` + route,
            data,
            { withCredentials: true }
          )
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
      }
    }
  }, [data, route, tigger, type, httpClick, setHttpClick, category]);
  return Data;
};

export default UseHTTPRequest;
