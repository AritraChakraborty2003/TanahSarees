/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../AppContext/AppContext";
import axios from "axios";
import { capitalizeFirstLetter } from "../../../Utils/CapitalizeFirstLetter";
import UseHTTPRequest from "../../../Utils/useHTTPRequest";
import { useCheckAuth } from "../../../Utils/useCheckAuth";

const SliderComponent = () => {
  const { change } = useContext(AppContext);
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const {
    sareeData,
    setSareeData,
    setActiveFilter,
    filteredData,
    setFilteredData,
  } = useContext(AppContext);
  const [tigger, setTigger] = useState(false);
  const [tigger_auth, set_tigger_auth] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/sarees`
        );

        console.log(res.data);
        setSareeData(res.data);
        setItem(res.data);
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    };
    fetchOrder();
  }, [setSareeData, sareeData]);

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

      {/* Slick Slider */}
      {/* <Slider ref={sliderRef} {...settings}>
        {sareeData &&
          sareeData.map((item, index) => {
            return (
              <>
                <p>{item.sname}</p>
              </>
            );
          })}
      </Slider> */}

      {/* {sareeData &&
        sareeData.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className="w-[27vw] ml-[5vmin] flex flex-col justify-center items-center mt-[3vmin]"
              >
                <p>{item.sname}</p>
              </div>

              <img src={"http://localhost:8040/" + item.photo} />
            </>
          );
        })} */}

      {sareeData.length > 0 ? (
        <>
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="hidden lg:block  absolute left-1 lg:left-2 top-[40%] lg:top-[6%] transform -translate-y-1/2 z-10 p-1 lg:p-3 rounded-full"
          >
            <ChevronLeft className="w-[4rem] h-[4rem] rounded-[2rem]  bg-black text-white lg:w-[2rem] lg:h-[2rem] lg:rounded-[1rem]" />
          </button>
          <Slider ref={sliderRef} {...settings}>
            {sareeData.map((item) => (
              <div key={item._id} className="zoom-div lg:ml-[-1vmin]">
                <div className="flex flex-col gap-x-8 lg:gap-y-4 justify-center items-center">
                  <a href="/products">
                    <div
                      className="w-[25vw] h-[15vh] lg:w-[20vw] lg:h-[34vh] border-[#EEE5DA] border-[4px] rounded-full lg:rounded-[50%] 2xl:rounded-[65%] bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${
                          import.meta.env.VITE_APP_API_URL_TEST + item.photo
                        })`,
                        backgroundPosition: "top",
                      }}
                    ></div>
                  </a>

                  {/* Text Below Image */}
                  <p className="font-Montserrat w-[70%] font-normal text-[2.6vmin] lg:text-sm text-center mt-1 lg:mt-[-1vmin]">
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
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="hidden lg:block absolute right-1 lg:right-4 top-[40%]  lg:top-[6%] transform -translate-y-1/2 z-10 p-1 lg:p-3 rounded-full"
          >
            <ChevronRight className="w-[4rem] h-[4rem] rounded-[2rem]  bg-black text-white lg:w-[2rem] lg:h-[2rem] lg:rounded-[1rem]" />
          </button>
        </>
      ) : (
        // Shimmer UI with 4 placeholders
        <div className="flex gap-4 gap-x-8 justify-center items-center">
          {sareeData.length > 0 ? (
            <Slider ref={sliderRef} {...settings}>
              {sareeData.map((item) => (
                <div key={item._id} className="zoom-div lg:ml-[-1vmin]">
                  <div className="flex flex-col lg:gap-y-4 justify-center items-center">
                    <a href="/products">
                      <div
                        className="w-[26vw] h-[15vh] lg:w-[20vw] lg:h-[34vh] border-[#EEE5DA] border-[4px] rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${
                            import.meta.env.VITE_APP_API_URL_TEST + item.photo
                          })`,
                          backgroundPosition: "top",
                        }}
                      ></div>
                    </a>

                    {/* Text Below Image */}
                    <p className="font-Montserrat w-[70%] font-normal text-[2.6vmin] lg:text-sm text-center mt-1 lg:mt-[-1vmin]">
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
          ) : (
            // Shimmer UI - Show 3 on mobile, 4 on large screens
            <div className="flex gap-4 justify-center items-center">
              {Array.from({ length: window.innerWidth >= 1024 ? 4 : 3 }).map(
                (_, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center animate-pulse"
                  >
                    <div className="w-[26vw] h-[15vh] lg:w-[20vw] lg:h-[34vh] border-[#EEE5DA] border-[4px] rounded-full bg-gray-300"></div>
                    <div className="w-32 h-4 mt-3 bg-gray-300 rounded"></div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}

      {/* Right Arrow Button (CSS unchanged) */}
    </div>
  );
};

export default SliderComponent;
