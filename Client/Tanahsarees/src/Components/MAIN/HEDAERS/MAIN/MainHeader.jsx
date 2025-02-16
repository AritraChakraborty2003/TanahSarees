/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Marqueecomp from "../Marqueecomp";
import Smallheader from "../Smallheader";
import Header from "../Header/Header";
import OptionsBar from "../Header/OptionsBar";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../../../AppContext/AppContext";

export default function MainHeader(props) {
  const { setChange } = useContext(AppContext);
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
    </>
  );
}
