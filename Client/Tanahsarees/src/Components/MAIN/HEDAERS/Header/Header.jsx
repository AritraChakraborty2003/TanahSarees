/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import Modal from "react-modal";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext/AppContext";
//import styles 👇
import "react-modern-drawer/dist/index.css";

const Header = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [tigger, setTigger] = useState(false);
  const navigate = useNavigate();
  const {
    cartIsOpen,
    toggleDrawer,
    hamIsOpen,
    toggleHam,
    Loginlargescreen,
    setLoginlargescreen,
    isAdminLogin,
    isLogoutClick,
    setisLogoutClick,
  } = useContext(AppContext);

  const openLoginLargeModal = () => {
    setLoginlargescreen(true);
  };

  const closeLoginLargeModal = () => {
    setLoginlargescreen(false);
  };

  //For CMS Logout
  const handleLogout = async () => {
    try {
      await axios.get(
        `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/admin/logout`,
        {
          withCredentials: true,
        }
      );
      console.log("Logout successful");

      location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

  return (
    <>
      {(screen.width > 1000 && (
        <div
          className={`mainHolder flex w-[100vw] pb-3 bg-white ${
            props?.type === "scrollHead"
              ? "z-[1000] fixed top-0 left-0 border-[#d5d5d5] border-b-[1px] p-4"
              : "z-10"
          }`}
        >
          <div className="searchHolder w-[33.3%]  flex justify-center items-center">
            <Search />
          </div>
          <div className="logoHolder flex justify-center items-center w-[33.34%]  mt-3 ml-12">
            <Link to="/main">
              {" "}
              <img src="logo.png" height={200} width={220} />{" "}
            </Link>
          </div>
          {props.category != "CMS" ? (
            <div className="relative purchaseOptHolder w-[33.33%]  flex justify-end items-center  gap-x-9 2xl:gap-x-8 pr-12 mt-6">
              <div className="relative inline-block">
                {/* Heart Icon */}
                <a className="mt-[-0.65vmin] darktext text-[4.75vmin] font-extralight relative">
                  <i className="ri-heart-line"></i> {/* Heart Icon */}
                </a>

                {/* Notification Circle (Positioned Over Heart) */}
                <div className="absolute top-[1px] right-[0.35px] flex items-center justify-center w-[2.8vmin] h-[2.8vmin] bg-[#FFA500] text-white text-[1.5vmin] font-medium rounded-full">
                  0{/* Replace with dynamic count */}
                </div>
              </div>

              <a className="mt-[-1vmin] darktext text-[4.75vmin] font-extralight">
                <i className="ri-user-line " onClick={openLoginLargeModal}></i>
              </a>
              <div className="relative inline-block">
                {/* Heart Icon */}
                <a className="mt-[-1.35vmin] 2xl:mt-[-2vmin] darktext text-[4.75vmin] font-extralight">
                  <i
                    className="ri-shopping-cart-line"
                    onClick={toggleDrawer}
                  ></i>
                </a>

                {/* Notification Circle (Positioned Over Heart) */}
                <div className="absolute top-[1px] right-[-0.15px] flex items-center justify-center w-[2.8vmin] h-[2.8vmin] bg-[#FFA500] text-white text-[1.5vmin] font-medium rounded-full">
                  0{/* Replace with dynamic count */}
                </div>
              </div>
            </div>
          ) : (
            <>
              {isAdminLogin ? (
                <div className="buttonHolder w-[33.33%] flex justify-center items-center ">
                  <button
                    className="bg-red-500 text-white p-3 rounded-md lg:w-[30%]"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      )) || (
        <>
          <div className="flex w-[100vw]">
            <div className="logoHolder  flex  w-[24%]  mt-3 ">
              <a className="mt-[3vmin] darktext  text-[7.75vmin] font-extralight pl-3">
                <i className="ri-menu-line" onClick={toggleHam}></i>
              </a>
            </div>
            <div className="logoHolder  flex justify-center items-center w-[49.5%]  mt-3 ml-[-0.35vmin] ">
              <Link to="/main">
                {" "}
                <img src="logo.png" height={120} width={180} />
              </Link>
            </div>
            {props.category != "CMS" ? (
              <div className="purchaseOptHolder w-[27%]  flex justify-end items-center  gap-x-5 pr-2 2xl:gap-x-20 mt-3">
                <div className="relative inline-block">
                  {/* Heart Icon */}
                  <a className="mt-[-0.65vmin] darktext text-[9vmin] font-extralight relative">
                    <i className="ri-heart-line"></i> {/* Heart Icon */}
                  </a>

                  {/* Notification Circle (Positioned Over Heart) */}
                  <div className="absolute top-[1px] right-[0.35px] flex items-center justify-center w-[5vmin] h-[5vmin] bg-[#FFA500] text-white text-[2.45vmin] font-medium rounded-full">
                    0{/* Replace with dynamic count */}
                  </div>
                </div>
                <div className="relative inline-block">
                  {/* Heart Icon */}
                  <a className="mt-[-0.65vmin] darktext text-[9vmin] font-extralight relative">
                    <i
                      className="ri-shopping-cart-line"
                      onClick={toggleDrawer}
                    ></i>{" "}
                    {/* Heart Icon */}
                    <div className="absolute top-[1px] right-[0.35px] flex items-center justify-center w-[5vmin] h-[5vmin] bg-[#FFA500] text-white text-[2.45vmin] font-medium rounded-full">
                      0{/* Replace with dynamic count */}
                    </div>
                  </a>

                  {/* Notification Circle (Positioned Over Heart) */}
                  <div className="absolute top-[1px] right-[0.35px] flex items-center justify-center w-[5vmin] h-[5vmin] bg-[#FFA500] text-white text-[2.45vmin] font-medium rounded-full">
                    0{/* Replace with dynamic count */}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {isAdminLogin ? (
                  <div className="buttonHolder w-[33.33%] flex justify-center items-center ">
                    <button
                      className="bg-red-500 text-white p-3 rounded-md lg:w-[30%]"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
