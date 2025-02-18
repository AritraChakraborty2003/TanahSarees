/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Search from "./Search";
import Modal from "react-modal";
import { useState, useContext } from "react";
import { AppContext } from "../../../../AppContext/AppContext";
//import styles 👇
import "react-modern-drawer/dist/index.css";

const Header = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { cartIsOpen, toggleDrawer, hamIsOpen, toggleHam } =
    useContext(AppContext);
  console.log(hamIsOpen);

  const toggle = () => {
    console.log("toggleDrawer");
  };
  const modalOpen = () => {
    setIsOpen(true);
  };
  const modalClose = () => {
    setIsOpen(false);
  };
  const customStyles = {
    content: {
      position: "fixed",
      top: "50%",
      left: "50%",
      right: "auto",
      width: "65vw",
      height: "56vh",
      bottom: "auto",
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
          <div className="purchaseOptHolder w-[33.33%]  flex justify-end items-center  gap-x-9 2xl:gap-x-8 pr-12 mt-6">
            <a className="mt-[-0.65vmin] darktext  text-[3.75vmin] font-extralight">
              <i className="ri-heart-line"></i>
            </a>
            <a className="mt-[-1vmin] darktext text-[3.75vmin] font-extralight">
              <i className="ri-user-line " onClick={modalOpen}></i>
            </a>

            <a className="mt-[-1.35vmin] 2xl:mt-[-1.5vmin] darktext text-[3.75vmin] font-extralight">
              <i className="ri-shopping-cart-line" onClick={toggleDrawer}></i>
            </a>
          </div>
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
            <div className="purchaseOptHolder w-[27%]  flex justify-end items-center  gap-x-5 pr-2 2xl:gap-x-20 mt-3">
              <a className="mt-[-0.65vmin] darktext  text-[7.75vmin] font-extralight">
                <i className="ri-heart-line"></i>
              </a>

              <a className="mt-[-1.35vmin] 2xl:mt-[-1.5vmin] darktext text-[7.75vmin] font-extralight">
                <i className="ri-shopping-cart-line" onClick={toggleDrawer}></i>
              </a>
            </div>
          </div>
        </>
      )}
      {modalIsOpen ? (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={modalOpen}
          onRequestClose={modalClose}
          style={customStyles}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={false}
        >
          <div className="w-[100%] h-[100%] flex bgpink">
            <div className="left w-[60%] border-[1px]"></div>
            <div className="right w-[40%] border-[1px]"></div>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
