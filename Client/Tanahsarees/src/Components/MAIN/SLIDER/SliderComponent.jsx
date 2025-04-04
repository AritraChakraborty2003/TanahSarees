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
        setSareeData(res.data);
      } catch (error) {
        console.log("Error in fetching data", error);
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

  return (
    <div className="relative flex justify-center items-center py-4">
      {sareeData.length > 0 && (
        <>
          {/* Left Navigation Button */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="hidden lg:block absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2"
          >
            <ChevronLeft className="w-8 h-8 bg-black text-white rounded-full" />
          </button>

          {/* Slick Slider */}
          <Slider ref={sliderRef} {...settings}>
            {[...sareeData].reverse().map((item) => (
              <div key={item._id} className="zoom-div">
                <div className="flex flex-col items-center">
                  <a
                    href="/product-filter"
                    onClick={() =>
                      navigate("/product-filter", {
                        state: {
                          data: { title: "material", material: item.material },
                        },
                      })
                    }
                  >
                    <div
                      className="w-[25vw] h-[15vh] lg:w-[20vw] lg:h-[34vh] border-[#EEE5DA] border-[4px] rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${
                          import.meta.env.VITE_APP_API_URL_TEST + item.photo
                        })`,
                        backgroundPosition: "top",
                      }}
                    ></div>
                  </a>

                  {/* Text Below Image */}
                  <p className="font-Montserrat w-[70%] font-normal text-[2.6vmin] lg:text-sm text-center mt-1">
                    {capitalizeFirstLetter(item.material + " silk")}
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Right Navigation Button */}
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="hidden lg:block absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2"
          >
            <ChevronRight className="w-8 h-8 bg-black text-white rounded-full" />
          </button>
        </>
      )}

      {/* Shimmer UI (If No Data) */}
      {sareeData.length === 0 && (
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
  );
};

export default SliderComponent;
