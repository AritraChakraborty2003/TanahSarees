/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
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
import { toast } from "react-toastify";

import { useCheckAuth } from "../../../../Utils/useCheckAuth";
const Header = (props) => {
  const {
    favouriteLength,
    setFavouriteLength,
    cartLength,
    setCartLength,
    setLoginOpen,
    ReloadDrawer,
    setReloadDrawer,
  } = useContext(AppContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [tigger, setTigger] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const authStatus = useCheckAuth(null, "auth");

  const adminStatus = useCheckAuth(null, "admin");

  useEffect(() => {
    if (authStatus.user) {
      setFavouriteLength(authStatus.user.message.favourites.length);
      console.log(authStatus.user.message.favourites.length);
      setCartLength(authStatus.user.message.cart.length);
      setLoggedIn(true);

      console.log("Hello", authStatus);
    }
  }, [authStatus, setCartLength, setFavouriteLength]);

  const {
    cartIsOpen,
    toggleDrawer,
    hamIsOpen,
    toggleHam,
    Loginlargescreen,
    setLoginlargescreen,
    isAdminLogin,
    setIsAdminLogin,
    isLogoutClick,
    setisLogoutClick,
    profileOpen,
    setProfileOpen,
    LargeSearchBox,
    setLargeSearchBox,
    smallSearchBox,
    searchDataValue,
    setSearchDataValue,
    setSmallSearchBox,
    activeFilter,
    setActiveFilter,
    filteredData,
    setFilteredData,
  } = useContext(AppContext);

  const openLoginLargeModal = () => {
    setLoginlargescreen(true);
  };

  const closeLoginLargeModal = () => {
    setLoginlargescreen(false);
  };
  useEffect(() => {
    if (ReloadDrawer) {
      toggleDrawer();
      setReloadDrawer(!ReloadDrawer);
    }
  }, [ReloadDrawer]);

  useEffect(() => {
    console.log("Search Data called");
  }, [searchDataValue]);

  //For CMS Logout
  const handleLogout = async () => {
    try {
      await axios.get(
        `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/admin/logout`,
        {
          withCredentials: true,
        }
      );
      setIsAdminLogin(!isAdminLogin);
      toast.success("Logout successful");

      location.reload();
    } catch (error) {
      toast.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    if (adminStatus.user) {
      setIsAdminLogin(true);
      console.log(adminStatus.user);
    }
  }, [adminStatus, setIsAdminLogin]);
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

  return (
    <>
      <>
        {(screen.width > 1000 && (
          <div
            className={`mainHolder flex w-[100vw] pb-3 bg-white ${
              props?.type === "scrollHead"
                ? "z-[1000] fixed top-0 left-0 border-[#d5d5d5] border-b-[1px] p-4"
                : "z-2000"
            }`}
          >
            <div className="searchHolder w-[33.3%]  flex justify-center items-center pl-3">
              <div className="w-[97%]">
                <Search />
                {LargeSearchBox ? (
                  <div className=" border-[1px] border-[#d5d5d5] w-[80%] flex flex-col justify-center items-start pl-2 ">
                    {searchDataValue.length > 0 ? (
                      searchDataValue.slice(0, 3).map((item, index) => (
                        <div className="border-b-[0.1px] border-[#d5d5d5] p-2 text-[#883022]">
                          <p
                            onClick={() => {
                              setActiveFilter(true);
                              setFilteredData([item]);
                              navigate("/products");
                              setLargeSearchBox(false);
                              setSearchDataValue("");
                            }}
                          >
                            {item.sname}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className=" p-2 text-[#883022]">No results found...</p>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="logoHolder flex justify-center items-center   lg:w-30     mt-3 ml-50">
              {/* <Link to="/"> */}{" "}
              <a href="/">
                <img src="logo.png" className="" /> {/* </Link> */}
              </a>
            </div>
            {props.category != "CMS" ? (
              <div className="relative purchaseOptHolder w-[33.33%]  ml-40  flex justify-end items-center  gap-x-9 2xl:gap-x-8 pr-12 mt-6">
                <div className="relative inline-block">
                  {/* Heart Icon */}

                  <a
                    className="mt-[-0.65vmin] darktxt text-[4.75vmin] font-extralight relative cursor-pointer"
                    onClick={() => {
                      if (!authStatus.user && !authStatus.isAuthenticated) {
                        openLoginLargeModal();
                      } else {
                        navigate("/favourites");
                      }
                    }}
                  >
                    <i className="ri-heart-line"></i> {/* Heart Icon */}
                  </a>

                  {/* Notification Circle (Positioned Over Heart) */}
                  <div className="absolute top-[1px] right-[0.35px] flex items-center justify-center w-[2.8vmin] h-[2.8vmin] bg-[#FFA500] text-white text-[1.5vmin] font-medium rounded-full">
                    {favouriteLength}
                    {/* Replace with dynamic count */}
                  </div>
                </div>

                <a className="mt-[-1vmin] darktxt text-[4.75vmin] font-extralight cursor-pointer">
                  <i
                    className="ri-user-line "
                    onClick={() => {
                      if (!authStatus.user && !authStatus.isAuthenticated) {
                        openLoginLargeModal();
                      } else {
                        setProfileOpen(true);
                      }
                    }}
                  ></i>
                </a>

                <div className="relative inline-block">
                  {/* Heart Icon */}

                  <a className="mt-[-1.35vmin] 2xl:mt-[-2vmin] darktxt text-[4.75vmin] font-extralight">
                    <i
                      className="ri-shopping-cart-line cursor-pointer"
                      onClick={() => {
                        if (!authStatus.user && !authStatus.isAuthenticated) {
                          openLoginLargeModal();
                        } else {
                          setReloadDrawer(!ReloadDrawer);
                        }
                      }}
                    ></i>
                  </a>

                  {/* Notification Circle (Positioned Over Heart) */}
                  <div className="absolute top-[1px] right-[-0.15px] flex items-center justify-center w-[2.8vmin] h-[2.8vmin] bg-[#FFA500] text-white text-[1.5vmin] font-medium rounded-full">
                    {cartLength}
                    {/* Replace with dynamic count */}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {adminStatus.isAuthenticated ? (
                  <div className="buttonHolder w-[33.33%] flex justify-center items-center ">
                    <button
                      className="bg-red-500 text-white p-3 rounded-md lg:w-[30%]"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                ) : null}
              </>
            )}
          </div>
        )) || (
          <>
            <div className="flex w-[100vw]">
              <div className="logoHolder  flex  w-[24%]  mt-3 ">
                <a className="mt-[3vmin] darktxt  text-[7.75vmin] font-extralight pl-3">
                  <i className="ri-menu-line" onClick={toggleHam}></i>
                </a>
              </div>
              <div className="logoHolder  flex justify-center items-center w-[49.5%]  mt-3 ml-[-0.35vmin] ">
                <Link to="/">
                  {" "}
                  <img src="logo.png" height={100} width={80} />
                </Link>
              </div>
              {props.category != "CMS" ? (
                <div className="purchaseOptHolder w-[27%]  flex justify-end items-center  gap-x-5 pr-2 2xl:gap-x-20 mt-3">
                  <div className="relative inline-block">
                    {/* Heart Icon */}

                    <a
                      className="mt-[-0.65vmin] darktxt text-[9vmin] font-extralight relative"
                      onClick={() => {
                        if (!authStatus.user && !authStatus.isAuthenticated) {
                          setLoginOpen(true);
                        } else {
                          navigate("/favourites");
                        }
                      }}
                    >
                      <i className="ri-heart-line"></i> {/* Heart Icon */}
                    </a>

                    {/* Notification Circle (Positioned Over Heart) */}
                    <div className="absolute top-[1px] right-[0.35px] flex items-center justify-center w-[5vmin] h-[5vmin] bg-[#FFA500] text-white text-[2.45vmin] font-medium rounded-full">
                      {favouriteLength}
                      {/* Replace with dynamic count */}
                    </div>
                  </div>
                  <div className="relative inline-block">
                    {/* Heart Icon */}
                    <a className="mt-[-0.65vmin] darktxt text-[9vmin] font-extralight relative">
                      <i
                        className="ri-shopping-cart-line"
                        onClick={() => {
                          if (!authStatus.user && !authStatus.isAuthenticated) {
                            setLoginOpen(true);
                          } else {
                            setReloadDrawer(!ReloadDrawer);
                          }
                        }}
                      ></i>{" "}
                      {/* Heart Icon */}
                    </a>
                    <div className="absolute top-[1px] right-[0.35px] flex items-center justify-center w-[5vmin] h-[5vmin] bg-[#FFA500] text-white text-[2.45vmin] font-medium rounded-full">
                      {cartLength}
                    </div>

                    {/* Notification Circle (Positioned Over Heart) */}
                  </div>
                </div>
              ) : (
                <>
                  {adminStatus.isAuthenticated ? (
                    <div className="buttonHolder w-[33.33%] flex justify-center items-center ">
                      <button
                        className="bg-red-500 text-white p-3 rounded-md lg:w-[30%]"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  ) : null}
                </>
              )}
            </div>
          </>
        )}
      </>
    </>
  );
};

export default Header;
