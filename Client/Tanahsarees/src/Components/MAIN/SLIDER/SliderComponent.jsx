/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../AppContext/AppContext";
import { styled } from "@mui/material";
import { useState, useEffect } from "react";
// import Product from "../../PRODUCTS/Product";
// import { Link, useNavigate } from "react-router-dom";
// Sample Hardcoded Data (Replace with API later)

const SliderComponent = () => {
  const { change, sareeData } = useContext(AppContext);
  const navigate = useNavigate();
  const sliderRef = React.useRef(null);
  // const navigate = useNavigate();

  const items = sareeData.reverse().slice(0, 7);

  // Slick Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4, // Shows 4 cards at a time
    slidesToScroll: 1, // Scrolls 1 at a time
    responsive: [
      {
        breakpoint: 1024, // For tablets & smaller screens
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600, // For mobile
        settings: { slidesToShow: 3 },
      },
    ],
  };

  const getMarginTop = () => {
    const width = window.innerWidth;
    if (width <= 600) return "3%";
    if (width >= 2048) return "19.5%";
    if (width >= 1920) return "15%";
    if (width >= 1700) return "19%";
    if (width >= 1536) return "19%";
    if (width >= 1280) return "20.5%";
    if (width >= 1000) return "16%";
  };

  const [marginTop, setMarginTop] = useState(getMarginTop());

  useEffect(() => {
    const handleResize = () => setMarginTop(getMarginTop());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        style={{
          marginTop,
          zIndex: 10,
          paddingBottom: "4vmin",
          paddingTop: "1.75vmin",
          // border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className=" absolute  left-1 lg:left-5  top-[40%] lg:top-[5.35%] dark transform -translate-y-1/2 z-10  lighttxt p-1 lg:p-3  rounded-full md"
        >
          <ChevronLeft size={screen.width > 1000 ? 24 : 14} />
        </button>
        <Slider ref={sliderRef} {...settings}>
          {items &&
            [...items].map((item) => (
              <>
                {console.log(import.meta.env.VITE_APP_API_URL + item.photo)}
                <div className="zoom-div lg:ml-[-1vmin]">
                  <div className="flex flex-col lg:gap-y-4 justify-center items-center">
                    <a href="/products">
                      <div
                        className="w-[26vw] h-[15vh] rounded-[50%] lg:w-[20vw] lg:h-[34vh] lg  border-[#EEE5DA] border-[4px] lg:rounded-[50%] 2xl:rounded-[65%] lg:gap-x-2 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${
                            import.meta.env.VITE_APP_API_URL + item.photo
                          })`,
                          backgroundPosition: "top",
                          // Assuming each item has an image property
                        }}
                      ></div>
                    </a>
                    {screen.width > 1000 ? (
                      <p className="font-Montserrat font-normal text-sm lg:text-md text-[#d5d5d5]-800 text-center mt-1">
                        {item.sname.slice(0, 20) + "..."}
                      </p>
                    ) : (
                      <p className="font-Montserrat font-normal text-sm lg:text-lg text-[#d5d5d5]-800 text-center mt-1">
                        {item.sname.slice(0, 8) + "..."}
                      </p>
                    )}
                  </div>
                </div>
              </>
            ))}
        </Slider>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute right-1 lg:right-7 top-[40%] lg:top-[5.35%] dark transform -translate-y-1/2 z-10  lighttxt p-1 lg:p-3  rounded-full md"
        >
          <ChevronRight size={screen.width > 1000 ? 24 : 14} />
        </button>
      </div>
    </>
  );
};

export default SliderComponent;
