/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import UserCard from "../CMScards/UserCard";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import SearchBar from "../CMS_Search/SearchBar";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useCheckAuth } from "../../../Utils/useCheckAuth";

const User = () => {
  const { change, setHttpClick, isAdminLogin } = useContext(AppContext);

  const [tigger_auth, set_tigger_auth] = useState(false);

  const [isLoginAdmin, setIsLoginAdmin] = useState(false);

  const navigate = useNavigate();
  const dataLogin = useCheckAuth(tigger_auth, "admin");
  useEffect(() => {
    if (dataLogin.isAuthenticated == true) {
      setIsLoginAdmin(true);
    }
  }, [dataLogin]);
  useEffect(() => {
    if (!isAdminLogin) {
      navigate("/cms");
    }
  }, [isAdminLogin, navigate]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL_TEST}api/v1/users`)
      .then((res) => {
        setUsers(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);

  return (
    <>
      <div
        className="flex flex-col text-center mt-8 lg:mt-0"
        style={{
          marginTop: `${
            !change
              ? screen.width > 1000
                ? "18%"
                : ""
              : screen.width > 1000
              ? "12%"
              : ""
          }`, // Adjust based on header height
          zIndex: 10, // Keep content below the header
        }}
      >
        <p className="text-sm text-gray-500">Home/Users</p>
        <h2 className="text-5xl text-gray-500 font-Montserrat font-medium overflow-hidden">
          Users
        </h2>
      </div>

      <div className="flex justify-center items-center w-[100vw] pb-5 mt-10">
        <div className="w-[85vw] lg:w-[50vw] ">
          <SearchBar category="user" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  mt-10 mb-10 gap-y-5">
        {users.map((item) => (
          <UserCard data={item} />
        ))}
      </div>
    </>
  );
};

export default User;
