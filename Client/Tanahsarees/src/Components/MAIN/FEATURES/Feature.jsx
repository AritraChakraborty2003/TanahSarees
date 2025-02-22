import React from "react";
import FeatureCard from "./FeatureCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Feature = () => {
  const data = [
    { url: "fast-delivery.png", text: "Fast Delivery" },
    { url: "quality.png", text: "Best Quality" },
    { url: "card1.png", text: "Secure Payment" },
    { url: "price.png", text: "Best Price" },
    { url: "online-purchase.png", text: "100% Purchase protection" },
  ];
  const sliderRef = React.useRef(null);

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
  return (
    <div>
      {(screen.width > 1000 && (
        <>
          <div className="lg:mt-3">
            <FeatureCard data={data} />
          </div>
        </>
      )) || (
        <>
          {screen.width > 320 ? (
            <div className="pt-1 pb-3">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="absolute top-[11.15%]  left-1 lg:left-[1px]  transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
              >
                <ChevronLeft size={screen.width > 1000 ? 24 : 18} />
              </button>
              <Slider ref={sliderRef} {...settings}>
                {data.map((item) => (
                  <>
                    <div className="w-[27vw] ml-[5vmin] flex flex-col justify-center items-center mt-[3vmin]">
                      <div
                        className="w-[20vw] h-[15vh]   flex justify-center items-center  rounded-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-110"
                        key={item.id}
                      >
                        <img
                          src={item.url}
                          alt={item.text}
                          className="max-w-full max-h-full object-contain flex justify-center items-center"
                        />
                      </div>
                    </div>
                  </>
                ))}
              </Slider>

              <button
                onClick={() => sliderRef.current.slickNext()}
                className="absolute top-[11.15%] right-[1px] lg:right-1  transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3 rounded-full shadow-md"
              >
                <ChevronRight size={screen.width > 1000 ? 24 : 18} />
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Feature;
