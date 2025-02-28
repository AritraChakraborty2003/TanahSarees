import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../AppContext/AppContext";
// import Product from "../../PRODUCTS/Product";
// import { Link, useNavigate } from "react-router-dom";
// Sample Hardcoded Data (Replace with API later)

const SliderComponent = () => {
  const { change, sareeData } = useContext(AppContext);
  const navigate = useNavigate();
  const sliderRef = React.useRef(null);
  // const navigate = useNavigate();

  const items = sareeData.reverse().slice(0, 7);

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
          className="w-[100vw]   pt-5 pb-1 mt-[2vmin] lg:p-5 lg:pt-[calc(100px)]" // Adjust based on actual header height
          style={{
            paddingTop: `${
              !change
                ? document.getElementById("mainHeader")?.offsetHeight || "190px"
                : "200px"
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
            {items &&
              [...items].map((item) => (
                <>
                  <div className="">
                    <div className="flex flex-col gap-y-4 gap-x-2 justify-center items-center">
                      <Link to="/products">
                        <div
                          className="w-[28vw] h-[14vh] rounded-[50%] lg:w-[20vw] lg:h-[40vh] lg:rounded-[50%] lg:gap-x-2 shadow-md shadow-amber-100 border-[#EEE5DA] border-[0.15px]"
                          style={{
                            backgroundImage: `url(${
                              import.meta.env.VITE_APP_API_URL + item.photo
                            })`,

                            backgroundSize: "cover", // Ensures image fills the div
                            backgroundPosition: "center", // Centers the image
                            backgroundRepeat: "no-repeat", // Prevents tiling
                          }}
                        ></div>

                        <p className="font-Montserrat text-[3.75vmin] font-normal mt-3 text-[#d5d5d5]-800">
                          {screen.width > 1000
                            ? item.sname
                            : item.sname.slice(0, 10) + "..."}
                        </p>
                      </Link>
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

      {screen.width > 1000 && screen.width < 1520 && (
        <>
          <div
            className="w-[100vw] pl-5 bg-[ #eee5da]" // Adjust based on actual header height
            style={{
              paddingTop: `${
                !change
                  ? document.getElementById("mainHeader")?.offsetHeight ||
                    "730px"
                  : "730px"
              }`,

              zIndex: 900,
            }}
          >
            {/* Slider */}
            {screen.width >= 1440 && screen.height > 890 ? (
              <>
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  className="absolute  left-1 lg:left-5  top-[40%] lg:top-[6%] dark transform -translate-y-1/2 z-10  lighttxt p-1 lg:p-3  rounded-full shadow-md"
                >
                  <ChevronLeft size={screen.width > 1000 ? 24 : 14} />
                </button>
                <Slider
                  ref={sliderRef}
                  {...settings}
                  className="  w-[100vw] 2xl:mt-[-46vmin] lg:mt-[-49vmin]  pr-[3.45vmin]"
                >
                  {items &&
                    [...items].map((item) => (
                      <>
                        <div className="zoom-div ml-[-1vmin]">
                          <div className="flex flex-col gap-y-4 justify-center items-center">
                            <Link to="/products">
                              <div
                                className="w-[26vw] h-[15vh] rounded-[50%] lg:w-[20vw] lg:h-[38vh] shadow-lg shadow-amber-100 border-[#EEE5DA] border-[4px] lg:rounded-[50%] lg:gap-x-2 bg-cover bg-center"
                                style={{
                                  backgroundImage: `url(${
                                    import.meta.env.VITE_APP_API_URL +
                                    item.photo
                                  })`,
                                  backgroundPosition: "top",
                                  // Assuming each item has an image property
                                }}
                                onClick={() => {
                                  navigate("/products");
                                }}
                              ></div>
                              <p className="font-Montserrat font-normal text-[#d5d5d5]-800 text-center mt-3">
                                {item.sname.slice(0, 20) + "..."}
                              </p>
                            </Link>
                          </div>
                        </div>
                      </>
                    ))}
                </Slider>
                <button
                  onClick={() => sliderRef.current.slickNext()}
                  className="absolute right-1 lg:right-1 top-[40%] lg:top-[6%] 2xl:w-[5%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3 rounded-full shadow-md"
                >
                  <ChevronRight size={screen.width > 1000 ? 24 : 14} />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  className="absolute  left-1 lg:left-1  top-[40%] lg:top-[5.5%] 2xl:top-[6%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
                >
                  <ChevronLeft size={screen.width > 1000 ? 24 : 14} />
                </button>
                <Slider
                  ref={sliderRef}
                  {...settings}
                  className="  w-[100vw] 2xl:mt-[-51vmin] lg:mt-[-56vmin] ml-[1.35vmin] "
                >
                  {items &&
                    [...items].map((item) => (
                      <>
                        <div className="ml-[-6vmin]">
                          <div className="flex flex-col gap-y-3 justify-center items-center">
                            <div
                              className="w-[26vw] h-[15vh] rounded-[50%] lg:w-[20vw] lg:h-[40vh] border-[#EEE5DA] border-[2px] lg:rounded-[50%] lg:gap-x-2 bg-cover bg-center shadow-lg"
                              style={{
                                backgroundImage: `url(${
                                  import.meta.env.VITE_APP_API_URL + item.photo
                                })`,
                                backgroundPosition: "top",

                                // Assuming each item has an image property
                              }}
                              onClick={() => {
                                navigate("/products");
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
                  className="absolute  right-1 lg:right-1  top-[40%] lg:top-[5.5%] 2xl:top-[5.6%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
                >
                  <ChevronRight size={screen.width > 1000 ? 24 : 14} />
                </button>
              </>
            )}

            {/* Right Button */}
          </div>
        </>
      )}

      {screen.width >= 1520 && screen.width < 1700 && (
        <>
          <div
            className="w-[100vw] pl-5  bg-[ #eee5da" // Adjust based on actual header height
            style={{
              paddingTop: `${
                !change
                  ? document.getElementById("mainHeader")?.offsetHeight ||
                    "686px"
                  : "500px"
              }`,

              zIndex: 900,
            }}
          >
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="absolute  left-1 lg:left-1  top-[40%] lg:top-[5.5%] 2xl:top-[6%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
            >
              <ChevronLeft size={screen.width > 1000 ? 24 : 14} />
            </button>
            <Slider
              ref={sliderRef}
              {...settings}
              className="  w-[100vw] 2xl:mt-[-51vmin] lg:mt-[-56vmin] ml-[1.35vmin] "
            >
              {items &&
                [...items].map((item) => (
                  <>
                    <div className="ml-[-6vmin]">
                      <div className="flex flex-col gap-y-3 justify-center items-center">
                        <div
                          className="w-[26vw] h-[15vh] rounded-[50%] lg:w-[20vw] lg:h-[40vh] border-[#EEE5DA] border-[2px] lg:rounded-[50%] lg:gap-x-2 bg-cover bg-center shadow-lg"
                          style={{
                            backgroundImage: `url(${
                              import.meta.env.VITE_APP_API_URL + item.photo
                            })`,
                            backgroundPosition: "top",

                            // Assuming each item has an image property
                          }}
                          onClick={() => {
                            navigate("/products");
                          }}
                        ></div>
                        <p className="font-Montserrat font-normal text-[#d5d5d5]-800">
                          {item.sname.slice(0, 18)}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
            </Slider>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="absolute  right-1 lg:right-1  top-[40%] lg:top-[5.5%] 2xl:top-[5.6%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
            >
              <ChevronRight size={screen.width > 1000 ? 24 : 14} />
            </button>
          </div>
        </>
      )}

      {screen.width >= 1700 && screen.width < 1900 && (
        <>
          <div
            className="w-[100vw] pl-5" // Adjust based on actual header height
            style={{
              paddingTop: `${
                !change
                  ? document.getElementById("mainHeader")?.offsetHeight ||
                    "850px"
                  : "380px"
              }`,

              zIndex: 900,
            }}
          >
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="absolute  left-1 lg:left-1  top-[40%] lg:top-[5.5%] 2xl:top-[5.15%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
            >
              <ChevronLeft size={screen.width > 1000 ? 24 : 14} />
            </button>
            <Slider
              ref={sliderRef}
              {...settings}
              className="  w-[100vw] 2xl:mt-[-51vmin] lg:mt-[-56vmin] ml-[1.35vmin] "
            >
              {items &&
                [...items].map((item) => (
                  <>
                    <div className="ml-[-6vmin]">
                      <div className="flex flex-col gap-y-3 justify-center items-center">
                        <div
                          className="w-[26vw] h-[15vh] rounded-[50%] lg:w-[20vw] lg:h-[40vh] border-[#EEE5DA] border-[2px] lg:rounded-[50%] lg:gap-x-2 bg-cover bg-center shadow-lg"
                          style={{
                            backgroundImage: `url(${
                              import.meta.env.VITE_APP_API_URL + item.photo
                            })`,
                            backgroundPosition: "top",

                            // Assuming each item has an image property
                          }}
                          onClick={() => {
                            navigate("/products");
                          }}
                        ></div>
                        <p className="font-Montserrat font-normal text-[#d5d5d5]-800">
                          {item.sname}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
            </Slider>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="absolute  right-1 lg:right-1  top-[40%] lg:top-[5.5%] 2xl:top-[5.15%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
            >
              <ChevronRight size={screen.width > 1000 ? 24 : 14} />
            </button>
          </div>
        </>
      )}

      {screen.width >= 1900 && screen.width < 2048 && (
        <>
          <div
            className="w-[100vw] pl-5" // Adjust based on actual header height
            style={{
              paddingTop: `${
                !change
                  ? document.getElementById("mainHeader")?.offsetHeight ||
                    "850px"
                  : "380px"
              }`,

              zIndex: 900,
            }}
          >
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="absolute  left-1 lg:left-1  top-[40%] lg:top-[5.5%] 2xl:top-[6%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
            >
              <ChevronLeft size={screen.width > 1000 ? 24 : 14} />
            </button>
            <Slider
              ref={sliderRef}
              {...settings}
              className="  w-[100vw] 2xl:mt-[-51vmin] lg:mt-[-56vmin] ml-[1.35vmin] "
            >
              {items &&
                [...items].map((item) => (
                  <>
                    <div className="ml-[-6vmin]">
                      <div className="flex flex-col gap-y-3 justify-center items-center">
                        <div
                          className="w-[26vw] h-[15vh] rounded-[50%] lg:w-[20vw] lg:h-[40vh] border-[#EEE5DA] border-[2px] lg:rounded-[50%] lg:gap-x-2 bg-cover bg-center shadow-lg"
                          style={{
                            backgroundImage: `url(${
                              import.meta.env.VITE_APP_API_URL + item.photo
                            })`,
                            backgroundPosition: "top",

                            // Assuming each item has an image property
                          }}
                          onClick={() => {
                            navigate("/products");
                          }}
                        ></div>
                        <p className="font-Montserrat font-normal text-[#d5d5d5]-800">
                          {item.sname}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
            </Slider>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="absolute  right-1 lg:right-1  top-[40%] lg:top-[5.5%] 2xl:top-[6%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
            >
              <ChevronRight size={screen.width > 1000 ? 24 : 14} />
            </button>
          </div>
        </>
      )}

      {screen.width >= 2048 && (
        <>
          <div
            className="w-[100vw] pl-5" // Adjust based on actual header height
            style={{
              paddingTop: `${
                !change
                  ? document.getElementById("mainHeader")?.offsetHeight ||
                    "915px"
                  : "380px"
              }`,

              zIndex: 900,
            }}
          >
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="absolute  left-1 lg:left-1  top-[40%] lg:top-[5.5%] 2xl:top-[6%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
            >
              <ChevronLeft size={screen.width > 1000 ? 24 : 14} />
            </button>
            <Slider
              ref={sliderRef}
              {...settings}
              className="  w-[100vw] 2xl:mt-[-51vmin] lg:mt-[-56vmin] ml-[1.35vmin] "
            >
              {items &&
                [...items].map((item) => (
                  <>
                    <div className="ml-[-6vmin]">
                      <div className="flex flex-col gap-y-3 justify-center items-center">
                        <div
                          className="w-[26vw] h-[15vh] rounded-[50%] lg:w-[20vw] lg:h-[40vh] border-[#EEE5DA] border-[2px] lg:rounded-[50%] lg:gap-x-2 bg-cover bg-center shadow-lg"
                          style={{
                            backgroundImage: `url(${
                              import.meta.env.VITE_APP_API_URL + item.photo
                            })`,
                            backgroundPosition: "top",

                            // Assuming each item has an image property
                          }}
                          onClick={() => {
                            navigate("/products");
                          }}
                        ></div>
                        <p className="font-Montserrat font-normal text-[#d5d5d5]-800">
                          {item.sname}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
            </Slider>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="absolute  right-1 lg:right-1  top-[40%] lg:top-[5.5%] 2xl:top-[6%] transform -translate-y-1/2 z-10 bg-[#883022] text-white p-1 lg:p-3  rounded-full shadow-md"
            >
              <ChevronRight size={screen.width > 1000 ? 24 : 14} />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default SliderComponent;
