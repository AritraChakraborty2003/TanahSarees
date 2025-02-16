import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
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
  const { change } = useContext(AppContext);
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
    <>
      {screen.width < 600 && (
        <div
          className="w-[100vw] pt-5 pb-1 mt-[2vmin] lg:p-5 lg:pt-[calc(100px)]" // Adjust based on actual header height
          style={{
            paddingTop: `${
              !change
                ? document.getElementById("mainHeader")?.offsetHeight || "180px"
                : "160px"
            }`,

            zIndex: 900,
          }}
        >
          {/* Left Button */}
          {/* <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute  left-3 lg:left-3  top-[17%] lg:top-[68%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
          >
            <ChevronLeft size={screen.width > 1000 ? 24 : 14} />
          </button> */}

          {/* Slider */}
          <Slider
            ref={sliderRef}
            {...settings}
            className="  w-[100vw] mt-[-40vmin] gap-x-6 ml-[1.2vmin]"
          >
            {items.map((item) => (
              <>
                <div className="w-[30vw] h-[15vh] rounded-[50%] lg:w-[20vw] lg:h-[40vh] border-[1px] lg:rounded-[50%] lg:gap-x-2"></div>
              </>
            ))}
          </Slider>

          {/* Right Button */}
          {/* <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute right-1 lg:right-3 top-[17%]  transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3 rounded-full shadow-md"
          >
            <ChevronRight size={screen.width > 1000 ? 24 : 14} />
          </button> */}
        </div>
      )}

      {screen.width > 1000 && screen.width < 1700 && (
        <div
          className="w-[100vw] p-5 pt-[calc(100px)]" // Adjust based on actual header height
          style={{
            paddingTop: `${
              !change
                ? document.getElementById("mainHeader")?.offsetHeight || "696px"
                : "380px"
            }`,

            zIndex: 900,
          }}
        >
          {/* Left Button */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute  left-1 lg:left-3  top-[40%] lg:top-[23%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
          >
            <ChevronLeft size={screen.width > 1000 ? 24 : 14} />
          </button>

          {/* Slider */}
          {screen.width >= 1440 && screen.height > 820 ? (
            <Slider
              ref={sliderRef}
              {...settings}
              className="  w-[100vw] 2xl:mt-[-46vmin] lg:mt-[-38vmin] ml-[1.35vmin] "
            >
              {items.map((item) => (
                <>
                  <div className="w-[26vw] h-[15vh] rounded-[50%] lg:w-[20vw] lg:h-[40vh] border-[1px] lg:rounded-[50%] lg:gap-x-2"></div>
                </>
              ))}
            </Slider>
          ) : (
            <Slider
              ref={sliderRef}
              {...settings}
              className="  w-[100vw] 2xl:mt-[-46vmin] lg:mt-[-46vmin] ml-[1.35vmin] "
            >
              {items.map((item) => (
                <>
                  <div className="w-[26vw] h-[15vh] rounded-[50%] lg:w-[20vw] lg:h-[40vh] border-[1px] lg:rounded-[50%] lg:gap-x-2"></div>
                </>
              ))}
            </Slider>
          )}

          {/* Right Button */}
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute right-1 lg:right-3 top-[40%] lg:top-[23%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3 rounded-full shadow-md"
          >
            <ChevronRight size={screen.width > 1000 ? 24 : 14} />
          </button>
        </div>
      )}
    </>
  );
};

export default SliderComponent;
