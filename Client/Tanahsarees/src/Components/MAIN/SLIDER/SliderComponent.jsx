/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../AppContext/AppContext";
import axios from "axios";
import { capitalizeFirstLetter } from "../../../Utils/CapitalizeFirstLetter";

const SliderComponent = () => {
  const { sareeData, setSareeData } = useContext(AppContext);
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/sarees`
        );
        setSareeData(res.data || []); // Fixing the sareeData issue
      } catch (error) {
        console.log("Error in fetching data", error);
        setSareeData([]); // Ensuring sareeData doesn't break the UI
      }
    };
    fetchOrder();
  }, [setSareeData]);

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

  // Keeping the exact marginTop logic you had before
  const getMarginTop = () => {
    const width = window.innerWidth;
    if (width <= 600) return "3%";
    if (width >= 2048) return "19.5%";
    if (width >= 1920) return "15%";
    if (width >= 1700) return "19%";
    if (width >= 1536) return "19%";
    if (width >= 1280) return "20.5%";
    if (width >= 1000) return "16%";
    return "16%";
  };

  const [marginTop, setMarginTop] = useState(getMarginTop());

  useEffect(() => {
    const handleResize = () => setMarginTop(getMarginTop());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="mt"
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
      {sareeData.length > 0 ? (
        <>
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="hidden lg:block absolute left-1 lg:left-2 top-[40%] lg:top-[8%] transform -translate-y-1/2 z-10 p-1 lg:p-3 rounded-full"
          >
            <ChevronLeft className="w-[4rem] h-[4rem] rounded-[2rem] bg-black text-white lg:w-[2rem] lg:h-[2rem] lg:rounded-[1rem]" />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {sareeData.map((item) => (
              <div key={item._id} className="zoom-div lg:ml-[-1vmin]">
                <div className="flex flex-col gap-x-8 lg:gap-y-4 justify-center items-center">
                  <a
                    href="/product-filter"
                    onClick={() => {
                      navigate("/product-filter", {
                        state: {
                          data: {
                            title: "material",
                            material: item.material,
                          },
                        },
                      });
                    }}
                  >
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

                  <p className="font-Montserrat w-[70%] font-normal text-[2.6vmin] lg:text-sm text-center mt-1 lg:mt-[-1vmin]">
                    {capitalizeFirstLetter(item.material + " silk")}
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="hidden lg:block absolute right-1 lg:right-4 top-[40%] lg:top-[8%] transform -translate-y-1/2 z-10 p-1 lg:p-3 rounded-full"
          >
            <ChevronRight className="w-[4rem] h-[4rem] rounded-[2rem] bg-black text-white lg:w-[2rem] lg:h-[2rem] lg:rounded-[1rem]" />
          </button>
        </>
      ) : (
        <div className="flex gap-4 gap-x-8 justify-center items-center">
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
        </div>
      )}
    </div>
  );
};

export default SliderComponent;
