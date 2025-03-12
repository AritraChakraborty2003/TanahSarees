/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../AppContext/AppContext";
import { capitalizeFirstLetter } from "../../../Utils/CapitalizeFirstLetter";

const SliderComponent = () => {
  const { change, sareeData } = useContext(AppContext);
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  // Fix: Use .slice().reverse() to avoid mutating the original array
  const items = sareeData.slice().reverse().slice(0, 7);

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 3 } },
    ],
  };

  // Function to get margin-top dynamically based on screen width
  const getMarginTop = () => {
    const width = window.innerWidth;
    if (width <= 600) return "3%";
    if (width >= 2048) return "19.5%";
    if (width >= 1920) return "15%";
    if (width >= 1700) return "19%";
    if (width >= 1536) return "19%";
    if (width >= 1280) return "20.5%";
    if (width >= 1000) return "16%";
    return "16%"; // Default margin
  };

  const [marginTop, setMarginTop] = useState(getMarginTop());

  useEffect(() => {
    const handleResize = () => setMarginTop(getMarginTop());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        marginTop,
        zIndex: 10,
        paddingBottom: "4vmin",
        paddingTop: "1.75vmin",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Left Arrow Button (CSS unchanged) */}
      <button
        onClick={() => sliderRef.current.slickPrev()}
        className="hidden lg:block  absolute left-1 lg:left-2 top-[40%] lg:top-[5.35%] transform -translate-y-1/2 z-10 p-1 lg:p-3 rounded-full"
      >
        <ChevronLeft className="w-[4rem] h-[4rem] rounded-[2rem]  bg-black text-white lg:w-[2rem] lg:h-[2rem] lg:rounded-[1rem]" />
      </button>

      {/* Slick Slider */}
      <Slider ref={sliderRef} {...settings}>
        {items.map((item) => (
          <div key={item.id} className="zoom-div lg:ml-[-1vmin]">
            <div className="flex flex-col lg:gap-y-4 justify-center items-center">
              <a href="/products">
                <div
                  className="w-[26vw] h-[15vh] rounded-[50%] lg:w-[20vw] lg:h-[34vh] border-[#EEE5DA] border-[4px] lg:rounded-[50%] 2xl:rounded-[65%] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      import.meta.env.VITE_APP_API_URL + item.photo
                    }?v=1)`,
                    backgroundPosition: "top",
                  }}
                ></div>
              </a>

              {/* Text Below Image */}
              <p className="font-Montserrat w-[70%] font-normal text-[2.6vmin] lg:text-lg text-center mt-1">
                {window.innerWidth > 1000
                  ? capitalizeFirstLetter(
                      item.sname.toLowerCase().slice(0, 20)
                    ) + "..."
                  : capitalizeFirstLetter(
                      item.sname.toLowerCase().slice(0, 24)
                    ) + "..."}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Right Arrow Button (CSS unchanged) */}
      <button
        onClick={() => sliderRef.current.slickNext()}
        className="hidden lg:block absolute right-1 lg:right-4 top-[40%]  lg:top-[5.35%] transform -translate-y-1/2 z-10 p-1 lg:p-3 rounded-full"
      >
        <ChevronRight className="w-[4rem] h-[4rem] rounded-[2rem]  bg-black text-white lg:w-[2rem] lg:h-[2rem] lg:rounded-[1rem]" />
      </button>
    </div>
  );
};

export default SliderComponent;
