/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Marqueecomp from "../Marqueecomp";
import Smallheader from "../Smallheader";
import Header from "../Header/Header";
import OptionsBar from "../Header/OptionsBar";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import { useContext } from "react";
import Modal from "react-modal";
import { AppContext } from "../../../../AppContext/AppContext";
import { Link } from "react-router-dom";
import CartsCard from "../../../CARDS/CartsCard";
import AuthModal from "./AuthModal";
import { height } from "@mui/system";

export default function MainHeader(props) {
  const { setChange, contentCart, setContentCart, isLoggedIn, setIsLoggedIn } =
    useContext(AppContext);
  const [loginOpen, setLoginOpen] = useState(false);
  const data = [
    {
      image: "/Sarees/saree6.jpg",
      name: "Silk raw mango raw pes pesus and hugs and currency",
      price: "3000",
      size: "xl",
      type: "Raw mango",
    },
    {
      image: "/Sarees/saree1.jpg",
      name: "Silk raw mango raw pes pesus  and hugs and currency ",
      price: "3000",
      size: "xl",
      type: "Raw mango",
    },
    {
      image: "/Sarees/saree2.jpg",
      name: "Silk raw mango raw pes pesus  and hugs and currency",
      price: "3000",
      size: "xl",
      type: "Raw mango",
    },
    {
      image: "/Sarees/saree3.jpg",
      name: "Silk raw mango raw pes pesus  and hugs and currency",
      price: "3000",
      size: "xl",
      type: "Raw mango",
    },
    {
      image: "/Sarees/saree4.jpg",
      name: "Silk raw mango raw pes pesus ",
      price: "3000",
      size: "xl",
      type: "Raw mango",
    },
  ];
  setContentCart(data.length);
  const {
    cartIsOpen,
    toggleDrawer,
    hamIsOpen,
    toggleHam,
    Loginlargescreen,
    setLoginlargescreen,
  } = useContext(AppContext);
  const { scrollValue } = props;
  // console.log(scrollValue);
  const regularScroll = !scrollValue ? 340 : Number(scrollValue);
  const [showHeader, setShowHeader] = useState(true);
  const [showHi, setShowHi] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollThreshold, setScrollThreshold] = useState(regularScroll);

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
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "96vw",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
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
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "70vmin",
      width: "70vw",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
    overlay: {
      zIndex: 1600, // Ensuring it's above all elements
      backgroundColor: "rgba(0, 0, 0, 0.2)", // Light blur effect
      backdropFilter: "blur(1.5px)",
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
                {window.innerWidth > 1000 && <Smallheader />}
                <Header />
                <OptionsBar />
              </div>
            ) : null}
            {showHi ? (
              <div className="fixed top-0 left-0 w-full z-[100] bg-white shadow-md">
                <Header type="scrollHead" />
              </div>
            ) : null}
          </div>
        ) : (
          <>
            <Marqueecomp />
            {window.innerWidth > 1000 && <Smallheader />}
            <Header />
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
                  <p className="darktext font-Space-Grotesk font-semibold text-[6.5vmin] lg:text-[4vmin] p-1 letter-spacing-[3px]">
                    Cart
                  </p>
                  <div className="">
                    <Link to="/cart">
                      <button className="h-8 w-[50%] text-sm border-1 bg-[#F58B75] text-white text-Monteserrat cursor-pointer">
                        View Cart
                      </button>
                    </Link>
                  </div>
                </div>

                <a className="w-[30vw] flex justify-end text-3xl font-light font-Lato darktext mr-3 mt-1">
                  <i className="ri-close-line" onClick={toggleDrawer}></i>
                </a>
              </div>
              <div className="flex justify-center items-center">
                <div className="line w-[96%] h-[0.65px] bg-[#883022]"></div>
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
                    <CartsCard data={item} id={index} />
                  ))}
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
              <div className="TotalItems border-[#883022] border-t-[0.15px] w-[96%] flex flex-col pl-3 mt-3 ">
                <div className="flex  subtotalArea w-[100%] p-3 pb-10 lg:pb-3 ">
                  <p className="font-Montserrat text-xs text-[#883022] tracking-[2.35px]">
                    SUBTOTAL
                  </p>
                  <div className="flex subtotalArea  w-[50vw] lg:w-[26vw] p-1 justify-end mt-[-1.35vmin] lg:mt-[-1vmin] ">
                    <p className="text-end  darktext font-Montserrat font-normal tracking-[2.35px]">
                      ₹2579
                    </p>
                  </div>
                </div>
                <div className="sloganText">
                  <p className="text-[2.95vmin] pl-[1px]  md:text-xs darktext font-light ml-[-0.15vmin] mt-[-0.15vmin]">
                    Shipping, taxes, and discount codes calculated at checkout.
                  </p>
                </div>

                <div className="w-[100%] buttonHolder pb-4 flex justify-center items-center mt-4">
                  <button className="w-[80%]  bg-[#f58b76] text-white text-center lg:mt-3 p-2">
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
            }}
            duration={0.3}
            lockBackgroundScroll
          >
            <div className="cross-holder flex justify-end mr-4 mt-3">
              <div className="imageHolder">
                <a className="w-[30vw] flex justify-end text-3xl font-light font-Lato darktext mr-3 mt-1 p-1">
                  <i className="ri-close-line" onClick={toggleHam}></i>
                </a>
              </div>
            </div>
            <div>
              <div className="optionsHolder w-[75vw] h-[10vmin] flex justify-center items-center mt-6">
                <div
                  onClick={toggleHam}
                  className="optionsHolder h-full w-[94%]  border-[#d5d5d5] border-b-[0.15px] flex items-center darktext font-Montserrat font-medium"
                >
                  <Link to="/main"> SALE</Link>
                </div>
              </div>
              <div className="optionsHolder w-[75vw] h-[10vmin] flex justify-center items-center mt-6">
                <div
                  onClick={toggleHam}
                  className="optionsHolder h-full w-[94%]  border-[#d5d5d5] border-b-[0.15px] flex items-center darktext font-Montserrat font-medium"
                >
                  SAREES
                </div>
              </div>
              <div className="optionsHolder w-[75vw] h-[10vmin] flex justify-center items-center mt-6">
                <div
                  onClick={toggleHam}
                  className="optionsHolder h-full w-[94%]  border-[#d5d5d5] border-b-[0.15px] flex items-center darktext font-Montserrat font-medium"
                >
                  <Link to="/products"> PRODUCTS </Link>
                </div>
              </div>
              <div className="optionsHolder w-[75vw] h-[10vmin] flex justify-center items-center mt-6">
                <div
                  onClick={toggleHam}
                  className="optionsHolder h-full w-[94%]  border-[#d5d5d5] border-b-[0.15px] flex items-center darktext font-Montserrat font-medium"
                >
                  <Link to="/faq"> FAQ</Link>
                </div>
              </div>
              <div className="optionsHolder w-[75vw] h-[10vmin] flex justify-center items-center mt-6">
                <div
                  onClick={toggleHam}
                  className="optionsHolder h-full w-[94%]  border-[#d5d5d5] border-b-[0.15px] flex items-center darktext font-Montserrat font-medium"
                >
                  <Link to="/shipping">SHIPPING</Link>
                </div>
              </div>
              <div className="optionsHolder w-[75vw] h-[10vmin] flex justify-center items-center mt-6">
                <div
                  onClick={toggleHam}
                  className="optionsHolder h-full w-[94%]  border-[#d5d5d5] border-b-[0.15px] flex items-center darktext font-Montserrat font-medium"
                >
                  <Link to="/tackorder"> TRACK ORDER</Link>
                </div>
              </div>
              {!isLoggedIn ? (
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
                    onClick={modalOpen}
                  >
                    ACCOUNT
                  </button>
                  <button
                    className="btn p-2 border-[#F28C28] border-[1px] bg-[#f69a7c]  text-white rounded-[11px] w-[40%] "
                    onClick={modalOpen}
                  >
                    LOGIN
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
            shouldCloseOnOverlayClick={false}
          >
            <div className="relative ">
              <a className="absolute w-[80vw] flex justify-end text-3xl font-light font-Lato darktext  mt-1 p-2">
                <i className="ri-close-line" onClick={modalClose}></i>
              </a>
              <div className="">
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
            <div className="bg-[#f7d9cb] w-[100%] h-[100%]">
              <div className="iconHolder h-[6vmin] overflow-hidden">
                <a className="flex justify-start text-3xl font-light font-Lato darktext  mt-2 ml-2 p-2 ">
                  <i
                    className="ri-close-line"
                    onClick={CloseLargeModalLogin}
                  ></i>
                </a>
              </div>
              <div className="holder flex h-[calc(100%-6vmin)] w-[100%] pr-2 pb-2">
                <div className="leftHolder w-[52%] mt-[-1.45vmin] h-full flex flex-col justify-center items-center">
                  <img
                    src="logo_new.png"
                    height={280}
                    width={280}
                    className="darktext"
                  />
                  <p className="text-xs lg:text-sm mt-6 darktext tracking-wider">
                    ( Login to your account & fill the details )
                  </p>
                </div>
                <div className="rightHolder w-[48%]  h-full  ">
                  <div className="w-[80%]   mt-3 ml-2 bg-white  rounded-md ">
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
    </>
  );
}
