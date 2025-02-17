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
import { AppContext } from "../../../../AppContext/AppContext";

export default function MainHeader(props) {
  const { setChange, contentCart } = useContext(AppContext);
  const { cartIsOpen, toggleDrawer, hamIsOpen, toggleHam } =
    useContext(AppContext);
  const { scrollValue } = props;
  // console.log(scrollValue);
  const regularScroll = !scrollValue ? 340 : Number(scrollValue);
  const [showHeader, setShowHeader] = useState(true);
  const [showHi, setShowHi] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollThreshold, setScrollThreshold] = useState(regularScroll);

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
    if (cartIsOpen) {
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
  }, [cartIsOpen]);

  return (
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

      {cartIsOpen && !hamIsOpen && (
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
                <p className="darktext font-Space-Grotesk font-semibold text-[4vmin] p-2 letter-spacing-[3px]">
                  Cart
                </p>
                <p>( View Cart )</p>
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
                maxHeight: "100vh",
              }}
            ></div>
          </div>
          <div
            className={`absolute flex flex-col justify-center items-center ${
              contentCart <= 2 ? "bottom-2" : ""
            }`}
          >
            <div className="TotalItems border-[#883022] border-t-[0.15px] w-[96%]  ">
              <div className="flex subtotalArea w-[100%] p-3">
                <p className="font-Montserrat text-xs text-[#883022] tracking-[2.35px]">
                  SUBTOTAL
                </p>
                <div className="flex subtotalArea w-[26vw] p-1 justify-end">
                  <p className="text-end mt-[-1vmin]  darktext font-Montserrat font-normal tracking-[2.35px]">
                    ₹2579
                  </p>
                </div>
              </div>
            </div>

            <div className="sloganText">
              <p className="text-sm darktext font-light mt-[-0.15vmin]">
                Shipping, taxes, and discount codes calculated at checkout.
              </p>
            </div>

            <div className="w-[100%] buttonHolder flex justify-center items-center">
              <button className="w-[80%] bg-[#f58b76] text-white text-center mt-3 p-2">
                PLACE ORDER
              </button>
            </div>
          </div>
        </Drawer>
      )}

      {hamIsOpen && !cartIsOpen && (
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
          Hello I am coder
        </Drawer>
      )}
    </>
  );
}
