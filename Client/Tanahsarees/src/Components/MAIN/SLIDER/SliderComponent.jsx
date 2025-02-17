import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
// import Product from "../../PRODUCTS/Product";
// import { Link, useNavigate } from "react-router-dom";
// Sample Hardcoded Data (Replace with API later)
const items = [
  { id: 1, title: "Raw Mango ", img: "/Sarees/saree1.jpg" },
  { id: 2, title: "Silk Saree", img: "/Sarees/saree2.jpg" },
  { id: 3, title: "Siffon saree", img: "/Sarees/saree3.jpg" },
  { id: 4, title: "silk saree", img: "/Sarees/saree4.jpg" },
  { id: 5, title: "Cotton saree", img: "/Sarees/saree5.jpg" },
  { id: 6, title: "Chikon saree", img: "/Sarees/saree6.jpg" },
];

const SliderComponent = () => {
  const { change } = useContext(AppContext);
  const sliderRef = React.useRef(null);
  // const navigate = useNavigate();

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
                ? document.getElementById("mainHeader")?.offsetHeight || "190px"
                : "160px"
            }`,

            zIndex: 900,
          }}
          // onClick={() => navigate("/Products")}
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
                <div className="">
                  <div className="flex flex-col gap-y-4 gap-x-2 justify-center items-center">
                    <div
                      className="w-[28vw] h-[14vh] rounded-[50%] lg:w-[20vw] lg:h-[40vh] lg:rounded-[50%] lg:gap-x-2 border-[#E97451] border-[1px]"
                      style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: "cover", // Ensures image fills the div
                        backgroundPosition: "center", // Centers the image
                        backgroundRepeat: "no-repeat", // Prevents tiling
                      }}
                    ></div>

                    <p className="font-Montserrat text-[3.75vmin] font-normal text-[#d5d5d5]-800">
                      {item.title}
                    </p>
                  </div>
                </div>
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
        <>
          <div
            className="w-[100vw] p-5 pt-[calc(100px)]" // Adjust based on actual header height
            style={{
              paddingTop: `${
                !change
                  ? document.getElementById("mainHeader")?.offsetHeight ||
                    "686px"
                  : "380px"
              }`,

              zIndex: 900,
            }}
          >
            {/* Slider */}
            {screen.width >= 1440 && screen.height > 890 ? (
              <>
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  className="absolute  left-1 lg:left-1  top-[40%] lg:top-[6.5%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
                >
                  <ChevronLeft size={screen.width > 1000 ? 24 : 14} />
                </button>
                <Slider
                  ref={sliderRef}
                  {...settings}
                  className="  w-[100vw] 2xl:mt-[-46vmin] lg:mt-[-48vmin] ml-[1.35vmin] "
                >
                  {items.map((item) => (
                    <>
                      <div className="zoom-div ml-[-6vmin]">
                        <div className="flex flex-col gap-y-4 justify-center items-center">
                          <div
                            className="w-[26vw] h-[15vh] rounded-[50%] lg:w-[20vw] lg:h-[40vh] border-[#E97451] border-[4px] lg:rounded-[50%] lg:gap-x-2 bg-cover bg-center"
                            style={{
                              backgroundImage: `url(${item.img})`,
                              backgroundPosition: "center",
                              // Assuming each item has an image property
                            }}
                          ></div>
                          <p className="font-Montserrat font-normal text-[#d5d5d5]-800">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
                </Slider>
                <button
                  onClick={() => sliderRef.current.slickNext()}
                  className="absolute right-1 lg:right-1 top-[40%] lg:top-[6.5%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3 rounded-full shadow-md"
                >
                  <ChevronRight size={screen.width > 1000 ? 24 : 14} />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  className="absolute  left-1 lg:left-1  top-[40%] lg:top-[5%] 2xl:top-[6.75%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
                >
                  <ChevronLeft size={screen.width > 1000 ? 24 : 14} />
                </button>
                <Slider
                  ref={sliderRef}
                  {...settings}
                  className="  w-[100vw] 2xl:mt-[-46vmin] lg:mt-[-46vmin] ml-[1.35vmin] "
                >
                  {items.map((item) => (
                    <>
                      <div className="ml-[-6vmin]">
                        <div className="flex flex-col gap-y-4 justify-center items-center">
                          <div
                            className="w-[26vw] h-[15vh] rounded-[50%] lg:w-[20vw] lg:h-[40vh] border-[#E97451] border-[2px] lg:rounded-[50%] lg:gap-x-2 bg-cover bg-center shadow-lg"
                            style={{
                              backgroundImage: `url(${item.img})`,
                              backgroundPosition: "center",

                              // Assuming each item has an image property
                            }}
                          ></div>
                          <p className="font-Montserrat font-normal text-[#d5d5d5]-800">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
                </Slider>
                <button
                  onClick={() => sliderRef.current.slickNext()}
                  className="absolute  right-1 lg:right-1  top-[40%] lg:top-[5%] 2xl:top-[6.75%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
                >
                  <ChevronRight size={screen.width > 1000 ? 24 : 14} />
                </button>
              </>
            )}

            {/* Right Button */}
          </div>
        </>
      )}
    </>
  );
};

export default SliderComponent;
