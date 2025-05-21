import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";

const BannerSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/banners`
        );
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };
    fetchBanner();
  }, []);

  // Separate banners based on type
  const mobileBanners = images.filter((img) => img.bannerType === "mobile");
  const laptopBanners = images.filter((img) => img.bannerType === "laptop");

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full">
      {/* Mobile Banner Slider */}
      <div className="block md:hidden">
        {" "}
        <Slider {...settings} className="h-full relative overflow-hidden">
          {
            mobileBanners.length > 0
              ? mobileBanners.map((img, index) => (
                  <div
                    key={index}
                    className="w-full h-[70vh] flex justify-center items-center relative" // Add relative here
                  >
                    <img
                      src={`${import.meta.env.VITE_APP_API_URL_TEST}${
                        img.image
                      }`}
                      alt={`Mobile Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <p className="absolute bottom-5 text-center w-full text-white text-5xl font-bold z-10">
                      . . . .
                    </p>
                  </div>
                ))
              : ""
            // <div className="w-full h-[40vh] flex justify-center items-center bg-gray-200">
            //   Loading...
            // </div>
          }
        </Slider>
      </div>

      {/* Laptop Banner Slider */}
      <div className="hidden md:block">
        {" "}
        {/* Visible only on larger screens */}
        <Slider {...settings} className="h-full overflow-hidden">
          {
            laptopBanners.length > 0
              ? laptopBanners.map((img, index) => (
                  <div
                    key={index}
                    className="w-full h-[65vh] lg:h-full flex justify-center items-center"
                  >
                    <img
                      src={`${import.meta.env.VITE_APP_API_URL_TEST}${
                        img.image
                      }`}
                      alt={`Laptop Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              : ""
            // <div className="w-full h-[65vh] lg:h-[90vh] flex text-center justify-center items-center bg-gray-200">
            //   Loading.....
            // </div>
          }
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
