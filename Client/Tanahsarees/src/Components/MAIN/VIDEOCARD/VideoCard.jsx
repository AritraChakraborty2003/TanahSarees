/* eslint-disable react/jsx-key */

/* eslint-disable react-hooks/exhaustive-deps */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const VideoCard = () => {
  const [data, setData] = useState([]);

  const API_URL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await axios.get(`${API_URL}api/v1/videos`);

        setData(response.data);
      } catch (error) {
        console.error("Error fetching GIFs:", error);
      }
    };
    fetchGifs();
  }, []);
  // console.log("maindata", data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1, // Default to 1 but allows smooth scrolling
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    lazyLoad: "ondemand",
    swipeToSlide: true, // Allows users to swipe smoothly
    variableWidth: true, // Allows free scrolling instead of fixed slides
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, swipeToSlide: true, variableWidth: false },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, swipeToSlide: true, variableWidth: false },
      },
    ],
  };

  return (
    <>
      <div className="flex pl-1 lg:pl-13 pr-2 mt-7   lg:mt-20">
        <Slider {...settings} className="w-full overflow-hidden">
          {data.map(({ url: gif, title }, index) => (
            <a href="/products">
              <div key={index} className="px-2">
                <div className="light border-[1px] border-gray-300 relative flex flex-col p-4  shadow-gray-350 w-[45vw] lg:w-[30vmin] shadow-lg">
                  <img
                    className="border-[1px] border-gray-300 w-full h-full object-cover"
                    src={gif}
                    alt={title}
                  />
                  <div className="">
                    <p className="flex justify-center mt-4 h-13 lg:h-15 lg:mt-2 darktxt text-xs font-Montserrat">
                      <span className="hidden lg:inline">{title}</span>{" "}
                      {/* Large Screens */}
                      <span className="lg:hidden">{title}</span>{" "}
                      {/* Small Screens */}
                    </p>

                    <button className="bg-black text-white text-xs ml-8">
                      <p className="text-center p-2 text-xs text-white">
                        Shop Now
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default VideoCard;
