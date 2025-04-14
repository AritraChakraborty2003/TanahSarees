/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Marqueecomp from "../Marqueecomp";
import Smallheader from "../Smallheader";
import Header from "../Header/Header";
import OrderModal from "./OrderModal";
import OptionsBar from "../Header/OptionsBar";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import { useContext } from "react";
import Modal from "react-modal";
import { AppContext } from "../../../../AppContext/AppContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CartsCard from "../../../CARDS/CartsCard";
import AuthModal from "./AuthModal";
import { height } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import { useCheckAuth } from "../../../../Utils/useCheckAuth";
import UseHTTPRequest from "../../../../Utils/useHTTPRequest";
import NavSideOptions from "./NavSideOptions";

export default function MainHeader(props) {
  const {
    setChange,
    contentCart,
    setContentCart,
    isLoggedIn,
    loginOpen,
    setLoginOpen,
    setIsLoggedIn,
    setIsAdminLogin,
    cartDrawerTigger,
    setCartDrawerTigger,
    cartTotal,
    setCartTotal,
    ReloadDrawer,
    setReloadDrawer,
    newvar,
    setnewvar,
  } = useContext(AppContext);
  const { isLogin, setIsLogin } = useContext(AppContext);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [Favourite, setFavourite] = useState(0);
  const [cart, setCart] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  const authStatus = useCheckAuth(null, "auth");

  useEffect(() => {
    if (authStatus.user) {
      setLoggedIn(true);
      setPhone(authStatus.user?.message?.phone);
      setAddress(authStatus.user?.message?.address);
    }
  }, [authStatus]);
  const [tiggerCart, settiggerCart] = useState(false);
  const [cartdata, setCartData] = useState([]);
  const [data, setData] = useState([]);

  const sareeData = UseHTTPRequest(tiggerCart, "/sarees", "GET", "", "");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/cart`,
          { withCredentials: true }
        );
        const cartItems = response.data;
        setCartData(cartItems);

        // Ensure sareeData is available before filtering
        if (!sareeData || sareeData.length === 0) return;

        const updatedFilteredData = sareeData
          .filter((saree) =>
            cartItems.some((cartItem) => cartItem.pid === saree._id)
          )
          .map((saree) => ({
            ...saree,
            qty:
              cartItems.find((cartItem) => cartItem.pid === saree._id)?.qty ||
              1,
          }));

        const calculatedTotal = updatedFilteredData.reduce(
          (acc, item) => acc + item.price * item.qty,
          0
        );
        setCartTotal(calculatedTotal);

        setData(updatedFilteredData);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [sareeData, tiggerCart, cartDrawerTigger, ReloadDrawer, newvar]); // Updated dependency array
  setContentCart(data.length);
  const {
    cartIsOpen,
    toggleDrawer,
    hamIsOpen,
    toggleHam,
    Loginlargescreen,
    setLoginlargescreen,
    isAdminLogin,
    setIsAdmin,
    profileOpen,
    LargeSearchBox,
    setLargeSearchBox,
    smallSearchBox,
    setSmallSearchBox,
    setProfileOpen,
  } = useContext(AppContext);
  const { scrollValue } = props;
  // console.log(scrollValue);
  const regularScroll = !scrollValue ? 340 : Number(scrollValue);
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);
  const [showHi, setShowHi] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollThreshold, setScrollThreshold] = useState(regularScroll);
  const [checkOrder, setCheckOrder] = useState(false);
  const { category } = props;

  // const OpenLargeSearchBox = () => {
  //   setLargeSearchBox(true);
  // };
  // const CloseLargeSearchBox = () => {
  //   setLargeSearchBox(false);
  // };
  // const OpenSmallSearchBox = () => {
  //   setSmallSearchBox(true);
  // };
  // const CloseSmallSearchBox = () => {
  //   setSmallSearchBox(false);
  // };

  const OpenLargeModalLogin = () => {
    setLoginlargescreen(true);
  };
  const CloseLargeModalLogin = () => {
    setLoginlargescreen(false);
  };
  const modalOpen = () => {
    setLoginOpen(true);
  };
  const modalClose = () => {
    setLoginOpen(false);
  };

  const profileOpenFunc = () => {
    setProfileOpen(true);
  };

  const profileCloseFunc = () => {
    setProfileOpen(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "90vw",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "white",

      border: "none",
      boxShadow: "none",
    },
    overlay: {
      zIndex: 1600, // Ensuring it's above all elements
      backgroundColor: "rgba(0, 0, 0, 0.2)", // Light blur effect
      backdropFilter: "blur(1.5px)", // Optional blur effect
    },
  };

  const customStylesLarge = {
    content: {
      top: "56%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: !isLogin ? "83vmin" : "75vmin",
      width: "70vw",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
      boxShadow: "none",
    },
    overlay: {
      zIndex: 1600, // Ensuring it's above all elements
      backgroundColor: "rgba(0, 0, 0, 0.2)", // Light blur effect
      backdropFilter: "blur(1.5px)",
    },
  };

  const customStylesProfile = {
    content: {
      top: "22.5%",
      left: "80%",
      right: "auto",
      bottom: "auto",
      width: "30vmin",
      backgroundColor: "white",
    },
    overlay: {
      zIndex: 2000, // Ensuring it's above all elements
      backgroundColor: "rgba(0, 0, 0, 0.2)", // Light blur effect
    },
  };

  const customSearchProfile = {
    content: {
      top: "23%",
      left: "3%",
      right: "auto",
      bottom: "auto",
      width: "30vmin",
      backgroundColor: "white",
    },
    overlay: {
      zIndex: 2500, // Ensuring it's above all elements
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (window.scrollY > scrollThreshold) {
        setShowHeader(false);
        setShowHi(true);
        setChange(true);
      } else {
        setShowHeader(true);
        setShowHi(false);
        setChange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Re
  useEffect(() => {
    if (cartIsOpen || loginOpen) {
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.bottom = "0";
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.bottom = "";
      document.body.style.overflow = ""; // Re-enable scroll
    }
    return () => {
      // Cleanup when component unmounts
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.bottom = "";
      document.body.style.overflow = "";
    };
  }, [cartIsOpen, loginOpen]);

  useEffect(() => {
    if (profileOpen) {
      const handleScroll = () => {
        setProfileOpen(false);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [profileOpen]);

  const handleLogout = async () => {
    try {
      await axios.get(
        `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/admin/logout`,
        {
          withCredentials: true,
        }
      );

      setProfileOpen(false);
      toast.success("Logout successful");
      setTimeout(() => {
        navigate("/");
        location.reload();
      }, 400);
    } catch (error) {
      toast.error("Logout failed:", error);
    }
  };

  const handlepayment = async () => {
    const {
      data: { order },
    } = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}api/v1/checkout`,
      {
        amount: cartTotal * 100,
      },
      {
        withCredentials: true,
      }
    );
    if (!order) return; // ✅ Ensure order is available before proceeding

    var options = {
      key: `${import.meta.env.VITE_RAZORPAY_API_KEY}`,
      amount: order.amount,
      currency: "INR",
      name: "Acme Corp",
      callback_url: `${
        import.meta.env.VITE_APP_API_URL
      }api/v1/checkout/verification/data?id=${authStatus.user.message._id}`,
      description: "Test Transaction",
      order_id: order.id,
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <>
        {screen.width > 1000 ? (
          <div>
            {showHeader ? (
              <div
                id="main-header"
                className="w-full bg-white shadow-lg fixed top-0 left-0 z-50"
              >
                <Marqueecomp />
                {window.innerWidth > 1000 &&
                  (category != "CMS" ? (
                    <Smallheader />
                  ) : (
                    <Smallheader category="CMS" />
                  ))}
                {category != "CMS" && <Header />}
                {category == "CMS" && <Header category="CMS" />}

                {category != "CMS" && <OptionsBar />}
              </div>
            ) : null}
            {showHi ? (
              <div className="fixed top-0 left-0 w-full z-[100] bg-white shadow-md">
                {category != "CMS" && <Header type="scrollHead" />}
                {category == "CMS" && (
                  <Header category="CMS" type="scrollHead" />
                )}
              </div>
            ) : null}
          </div>
        ) : (
          <>
            <Marqueecomp />
            {window.innerWidth > 1000 && <Smallheader />}
            {category != "CMS" && <Header />}
            {category == "CMS" && <Header category="CMS" />}

            <OptionsBar />
          </>
        )}

        {cartIsOpen && (
          <Drawer
            open={cartIsOpen}
            onClose={toggleDrawer}
            direction="right"
            style={{
              width: `${screen.width > 1000 ? "35vw" : "80vw"}`,
              position: "fixed",
              top: 0,
              right: 0,
              zIndex: 1100, // Above everything
              backgroundColor: "#fff",
              transition: "transform 0.3s ease-in-out",
              boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
            }}
            duration={0.3}
            lockBackgroundScroll={true}
          >
            <div className="relative cartHolder flex flex-col">
              <div className="cartTextHolder flex p-3 ">
                <div className="w-[100%]">
                  <p className="darktxt font-Space-Grotesk font-semibold text-[6.5vmin] lg:text-[4vmin] p-1 letter-spacing-[3px]">
                    Cart
                  </p>
                  <div className="">
                    {/* <button
                      onClick={() => {
                        toggleDrawer();
                        navigate("/cart");
                      }}
                      className="h-8 w-[50%] text-sm  dark lighttxt text-Monteserrat cursor-pointer"
                    >
                      View Cart
                    </button> */}
                  </div>
                </div>

                <a className="w-[30vw] flex justify-end text-3xl font-light font-Lato darktxt mr-3 mt-1">
                  <i className="ri-close-line" onClick={toggleDrawer}></i>
                </a>
              </div>
              <div className="flex justify-center items-center">
                <div className="line w-[96%] h-[0.65px] dark"></div>
              </div>

              <div
                className="relative displayArea  flex flex-col  items-center"
                id="displayArea"
                style={{
                  overflowY: "auto",
                  // maxHeight: "100vh",
                }}
              >
                <div className="flex flex-col gap-y-6 pb-1 mt-4  w-full">
                  {data.map((item, index) => (
                    <CartsCard data={item} key={item._id} id={item._id} />
                  ))}

                  {/* {console.log("data:", data)}
                  {data.length > 0 && console.log("hello cart")} */}
                </div>
              </div>
            </div>
            <div
              className={`absolute flex flex-col justify-center items-center ${
                screen.width > 800
                  ? contentCart <= 2
                    ? "bottom-3"
                    : ""
                  : contentCart <= 2
                  ? "bottom-[17vmin]"
                  : ""
              }`}
            >
              <div className="TotalItems border-[#262424] border-t-[0.15px] w-[96%] flex flex-col pl-3 mt-3 ">
                <div className="flex  subtotalArea w-[100%] p-3 pb-10 lg:pb-3 ">
                  <p className="font-Montserrat text-xs darktxt tracking-[2.35px]">
                    SUBTOTAL
                  </p>
                  <div className="flex subtotalArea  w-[50vw] lg:w-[26vw] p-1 justify-end mt-[-1.35vmin] lg:mt-[-1vmin] ">
                    <p className="text-end  darktxt font-Montserrat font-normal tracking-[2.35px] text-xs lg:text-sm">
                      ₹{cartTotal}
                    </p>
                  </div>
                </div>
                <div className="sloganText">
                  <p className="text-[2.95vmin] pl-[1px]  md:text-xs darktxt font-light ml-[-0.15vmin] mt-[-0.15vmin]">
                    Shipping, taxes, and discount codes calculated at checkout.
                  </p>
                </div>

                <div className="w-[100%] buttonHolder pb-4 flex justify-center items-center mt-4 ">
                  <button
                    className="orderbtn w-[80%]  dark lighttxt  text-center cursor-pointer lg:mt-3 p-2"
                    onMouseEnter={() => {
                      document.querySelector(
                        ".orderbtn"
                      ).style.backgroundColor = "#262424f2";
                    }}
                    onMouseLeave={() => {
                      document.querySelector(
                        ".orderbtn"
                      ).style.backgroundColor = "#262424";
                    }}
                    onClick={() => {
                      setCheckOrder(true);
                    }}
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </Drawer>
        )}

        {hamIsOpen && (
          <Drawer
            open={hamIsOpen}
            onClose={toggleHam}
            direction="left"
            style={{
              width: `${screen.width > 1000 ? "40vw" : "75vw"}`,
              position: "fixed",
              top: 0,
              right: 0,
              zIndex: 1100, // Above everything
              backgroundColor: "#fff",
              boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease-in-out",
              paddingBottom: "10vmin",
            }}
            duration={0.3}
            lockBackgroundScroll
          >
            <div className="cross-holder flex justify-end mr-4 mt-3">
              <div className="imageHolder">
                <a className="w-[30vw] flex justify-end text-3xl font-light font-Lato darktxt mr-3 mt-1 p-1">
                  <i className="ri-close-line" onClick={toggleHam}></i>
                </a>
              </div>
            </div>
            <div>
              <div className="optionsHolder w-[75vw] h-[10vmin] flex justify-center items-center mt-2"></div>
              <NavSideOptions />
              <div className="optionsHolder w-[75vw] h-[10vmin] flex justify-center items-center mt-6">
                <div
                  onClick={toggleHam}
                  className="optionsHolder h-full w-[94%]  border-[#d5d5d5] border-b-[0.15px] flex items-center darktxt font-Montserrat font-medium"
                >
                  <Link to="/products">SAREES</Link>
                </div>
              </div>
              <div className="optionsHolder w-[75vw] h-[10vmin] flex justify-center items-center mt-6">
                <div
                  onClick={toggleHam}
                  className="optionsHolder h-full w-[94%]  border-[#d5d5d5] border-b-[0.15px] flex items-center darktxt font-Montserrat font-medium"
                >
                  <Link to="/products"> PRODUCTS </Link>
                </div>
              </div>
              <div className="optionsHolder w-[75vw] h-[10vmin] flex justify-center items-center mt-6">
                <div
                  onClick={toggleHam}
                  className="optionsHolder h-full w-[94%]  border-[#d5d5d5] border-b-[0.15px] flex items-center darktxt font-Montserrat font-medium"
                >
                  <Link to="/faq"> FAQ</Link>
                </div>
              </div>
              <div className="optionsHolder w-[75vw] h-[10vmin] flex justify-center items-center mt-6">
                <div
                  onClick={toggleHam}
                  className="optionsHolder h-full w-[94%]  border-[#d5d5d5] border-b-[0.15px] flex items-center darktxt font-Montserrat font-medium"
                >
                  <Link to="/shipping">SHIPPING</Link>
                </div>
              </div>
              <div className="optionsHolder w-[75vw] h-[10vmin] flex justify-center items-center mt-6">
                <div
                  onClick={toggleHam}
                  className="optionsHolder h-full w-[94%]  border-[#d5d5d5] border-b-[0.15px] flex items-center darktxt font-Montserrat font-medium"
                >
                  <Link to="/trackorder"> TRACK ORDER</Link>
                </div>
              </div>

              {loggedIn ? (
                <div className="optionsHolder w-[75vw] h-[10vmin] flex justify-center items-center mt-6">
                  <div
                    onClick={toggleHam}
                    className="optionsHolder h-full w-[94%]  border-[#d5d5d5] border-b-[0.15px] flex items-center darktxt font-Montserrat font-medium"
                  >
                    <a href="/orders"> YOUR ORDERS</a>
                  </div>
                </div>
              ) : (
                ""
              )}
              {!loggedIn ? (
                <div className="optionsHolder w-[75vw] flex justify-start items-center mt-9 pl-2">
                  <div
                    onClick={toggleHam}
                    className="btnHolder flex gap-x-3 w-[100%] "
                  >
                    <button
                      className="btn p-2 border-[#F28C28] border-[1px] bg-[#f69a7c]  text-white rounded-[11px] w-[50%] "
                      onClick={modalOpen}
                    >
                      LOGIN
                    </button>
                  </div>
                </div>
              ) : (
                <div className="optionsHolder w-[100%] flex gap-x-5 justify-start items-center mt-9 pl-3">
                  <button
                    className="btn p-2 border-[#F28C28] border-[1px]  bg-white  text-[#F28C28] rounded-[11px] w-[40%] "
                    onClick={() => {
                      navigate("/profile");
                      toggleHam();
                    }}
                  >
                    PROFILE
                  </button>
                  <button
                    className="btn p-2 border-[#F28C28] border-[1px] bg-[#f69a7c]  text-white rounded-[11px] w-[40%] "
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    LOGOUT
                  </button>
                </div>
              )}
            </div>
          </Drawer>
        )}
      </>
      <>
        {loginOpen ? (
          <Modal
            isOpen={loginOpen}
            onAfterOpen={modalOpen}
            onRequestClose={modalClose}
            style={customStyles}
            contentLabel="Small Login Modal"
            // shouldCloseOnOverlayClick={false}
          >
            <div className="relative">
              <p className="absolute w-[95%]  text-3xl font-light font-Lato darktxt  mt-1 p-1">
                <p onClick={modalClose} className="text-xl font-bold">
                  close
                </p>
              </p>
              <div className="mt-3">
                <AuthModal
                  isOpen={loginOpen}
                  isLogin={false}
                  onClose={() => setLoginOpen(false)}
                />
              </div>
            </div>
          </Modal>
        ) : (
          ""
        )}
      </>
      {Loginlargescreen ? (
        <>
          {" "}
          <Modal
            isOpen={Loginlargescreen}
            onAfterOpen={OpenLargeModalLogin}
            onRequestClose={CloseLargeModalLogin}
            style={customStylesLarge}
            contentLabel="Small Login Modal"
            shouldCloseOnOverlayClick={false}
          >
            <div className="light w-[100%] h-[100%]">
              <div className="iconHolder h-[6vmin] overflow-hidden">
                <a className="flex justify-start text-3xl font-light font-Lato darktxt  mt-2 ml-2 p-2 ">
                  <i
                    className="ri-close-line"
                    onClick={CloseLargeModalLogin}
                  ></i>
                </a>
              </div>
              <div className="holder flex light h-[calc(100%-6vmin)] w-[100%] pr-2 pb-2">
                <div className="leftHolder w-[49%] light mt-[-1.45vmin] h-full flex flex-col justify-center items-center">
                  <img
                    src="logo_new.png"
                    height={280}
                    width={280}
                    className="darktxt"
                  />
                  <p className="text-xs lg:text-sm mt-6 darktxt tracking-wider">
                    ( Login to your account & fill the details )
                  </p>
                </div>
                <div className="rightHolder w-[48%]  h-full  flex justify-center items-center mt-[-1vmin]">
                  <div className="w-fit   mt-3 ml-1 bg-white  rounded-md ">
                    <div className="formHolder">
                      <AuthModal
                        isOpen={Loginlargescreen}
                        isLogin={false}
                        onClose={() => setLoginlargescreen(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        ""
      )}

      <Modal
        isOpen={profileOpen}
        style={customStylesProfile}
        onAfterOpen={profileOpenFunc}
        onRequestClose={profileCloseFunc}
      >
        <a className="">
          <i className="ri-close-line" onClick={profileCloseFunc}></i>
        </a>
        <div className="iconsHolder">
          <div
            className="profileHolder border-[0.15px] border-[#d5d5d5] p-2 mt-2 rounded-md cursor-pointer"
            onClick={() => {
              navigate("/profile");
              profileCloseFunc();
            }}
          >
            Profile
          </div>

          <div
            className="profileHolder bg-yellow-500 text-white border-[0.15px] border-[#d5d5d5] p-2 mt-4 rounded-md cursor-pointer"
            onClick={() => {
              navigate("/orders");
              profileCloseFunc();
            }}
          >
            Orders
          </div>

          <div
            className="profileHolder bg-red-500 text-white border-[0.15px] border-[#d5d5d5] p-2 mt-4 rounded-md cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </Modal>

      <OrderModal
        checkOrder={checkOrder}
        setCheckOrder={setCheckOrder}
        total={cartTotal}
        phone={phone}
        address={address}
        handlePayment={handlepayment}
      />
    </>
  );
}
