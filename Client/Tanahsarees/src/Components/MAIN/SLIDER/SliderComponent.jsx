import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample Hardcoded Data (Replace with API later)
const items = [
  { id: 1, title: "Item 1", img: "logo.png" },
  { id: 2, title: "Item 2", img: "https://via.placeholder.com/100" },
  { id: 3, title: "Item 3", img: "https://via.placeholder.com/100" },
  { id: 4, title: "Item 4", img: "https://via.placeholder.com/100" },
  { id: 5, title: "Item 5", img: "https://via.placeholder.com/100" },
  { id: 6, title: "Item 6", img: "https://via.placeholder.com/100" },
];

const SliderComponent = () => {
  const sliderRef = React.useRef(null);

  // Slick Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5, // Shows 4 cards at a time
    slidesToScroll: 1, // Scrolls 1 at a time
    responsive: [
      {
        breakpoint: 1024, // For tablets & smaller screens
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // For mobile
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="w-[100vw] mt-7 h-[37vh] overflow-hidden">
      {/* Left Button */}
      <button
        onClick={() => sliderRef.current.slickPrev()}
        className="absolute left-5 top-[55vh] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-3 rounded-full shadow-md"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Slider */}
      <Slider
        ref={sliderRef}
        {...settings}
        className="px-8  w-[100vw] h-[45vh]"
      >
        {items.map((item) => (
          <>
            <div key={item.id} className="">
              <div className="w-[18vw] h-[33vh] flex flex-col items-center justify-center  rounded-[100%] border-[#F7D9CB] border-[3px] bg-white">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[100px] h-[100px] rounded-full object-cover"
                />
                <p className="text-sm mt-2">{item.title}</p>
              </div>
            </div>
            <div className="flex justify-center mr-7">
              <p>{item.title}</p>
            </div>
          </>
        ))}
      </Slider>

      {/* Right Button */}
      <button
        onClick={() => sliderRef.current.slickNext()}
        className="absolute right-4 top-[55vh] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-3 rounded-full shadow-md"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default SliderComponent;
