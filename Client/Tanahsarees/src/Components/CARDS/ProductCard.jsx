/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Heart from "react-animated-heart";
import Tilt from "react-parallax-tilt";
import { AppContext } from "../../AppContext/AppContext";
import { useCheckAuth } from "../../Utils/useCheckAuth";
// import { useHandleCart } from "../../Utils/useHandleCart";

const RatingStars = ({ rating }) => {
  return (
    <div className="text-center text-yellow-400 text-xl">
      {Array.from({ length: 5 }, (_, i) => (
        <span className="text-black font-extralight" key={i}>
          {i < rating ? "⭐" : "☆"}
        </span>
      ))}
      <span className="text-xs font-extralight darktxt"> {rating} reviews</span>
    </div>
  );
};
const ProductCard = (props) => {
  const authStatus = useCheckAuth(null, "auth");
  const {
    setLoginlargescreen,
    setLoginOpen,
    heartClick,
    setHeartClick,
    heartSave,
    setHeartSave,
    heartItem,
    setHeartItem,
  } = useContext(AppContext);
  const [isQuickView, setIsQuickView] = useState(false);
  const [isFavorite, setIsFavourite] = useState(true);
  const [isClick, setClick] = useState(props.isClicked);
  const { _id, photo, sname, price, discount, rating } = props.data;
  const { type, Fav, isClicked } = props;

  const [heartClickTemp, setHeartClickTemp] = useState(false);

  const {
    activeProduct,
    setActiveProduct,
    setActiveFilter,
    filteredData,
    setFilteredData,
    cartClick,
    setCartClick,
    activeCartId,
    setactiveCartId,
    index,
    setIndex,
  } = useContext(AppContext);

  // const res = useHandleCart();

  return (
    <>
      <div className="main flex w-[45%]  lg:h-[80vh] lg:w-[20vw]  flex-col mt-6 ">
        <div
          className="flex relative flex-col gap-y-2   lg:gap-y-1 -top-[1.35vmin] lg:top-0"
          onMouseEnter={() => setIsQuickView(true)}
          onMouseLeave={() => setIsQuickView(false)}
        >
          {discount && (
            <div className="absolute z-50 ml-[70%] lg:ml-[80%] ">
              <img className="h-14 w-15" src="discount1.png" alt="" />
              <p className="absolute text-sm top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[2.5vmin]   lg:text-[1.5vmin]">
                {discount}%
              </p>
            </div>
          )}
          <Tilt
            tiltMaxAngleX={0} // Tilt angle on X-axis
            tiltMaxAngleY={0} // Tilt angle on Y-axis
            scale={1.03} // Image zoom on hover
            transitionSpeed={500} // Smooth transition
            className="relative lg:ml-0 w-full lg:w-full bg-white  shadow-lg overflow-hidden"
          >
            {/* Instead of using navigate, wrap the image in a Link */}
            <Link
              to="/product_descr"
              onClick={() => {
                setActiveProduct(props.data);
                localStorage.setItem(
                  "activeProduct",
                  JSON.stringify(props.data)
                );
                setIndex(0);
                setActiveFilter(false);
                setFilteredData([]); // Reset filter data on click
                window.scrollTo(0, 0);
              }}
              className="block  w-full"
            >
              <div className="relative overflow-hidden w-full h-[37vh] lg:h-[63vh]">
                <img
                  src={import.meta.env.VITE_APP_API_URL + photo}
                  alt={sname}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </Link>
          </Tilt>

          {/* Quick View Section with Transition */}
          {type === "favourite" && (
            <>
              {screen.width > 1000 && (
                <Link
                  to="/product_descr"
                  onClick={() => {
                    setActiveProduct(props.data);
                    setActiveFilter(false);
                    localStorage.setItem(
                      "activeProduct",
                      JSON.stringify(props.data)
                    );
                    setFilteredData([]); // Reset filter data on click
                    window.scrollTo(0, 0);
                  }}
                  className="block"
                >
                  {" "}
                  <div
                    className={`absolute  lg:mr-0 lg:w-[96%]  lg:text-[1.85vmin] p-1 font-poppins bg-[#F58B75] text-amber-50 flex justify-center border-amber-50 bottom-[24.3%] right-[1.9%] 
              transition-all duration-300 ease-in-out transform ${
                isQuickView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
                  >
                    Quick View
                  </div>
                </Link>
              )}

              {/* Favorite Heart */}
              <div
                id={_id}
                className="absolute lg:bottom-[15.1%] bottom-[15%] right-[-10%] lg:right-[-10%] z-50 scale-60 "
              >
                <Heart
                  isClick={isFavorite}
                  onClick={() => {
                    if (authStatus.isAuthenticated) {
                      setHeartItem(_id);
                      setIsFavourite(!isFavorite);
                      setHeartClick(true);
                    } else {
                      if (screen.width > 1000) {
                        setLoginlargescreen(true);
                      } else {
                        setLoginOpen(true);
                      }
                    }
                  }}
                />
              </div>
            </>
          )}

          {/* Default Heart */}
          {type !== "favourite" && (
            <div className="absolute bottom-[9%] lg:bottom-[8%]   rounded-full right-[-18%] scale-50 lg:scale-70 lg:right-[-9%] z-50">
              <div className="absolute -z-1 mt-6 ml-6.5 rounded-full  h-12   w-12 bg-amber-50"></div>
              <Heart
                isClick={isClick}
                onClick={() => {
                  if (authStatus.isAuthenticated) {
                    setHeartItem(_id);
                    setClick(!isClick);
                    setHeartClick(true);
                  } else {
                    if (screen.width > 1000) {
                      setLoginlargescreen(true);
                    } else {
                      setLoginOpen(true);
                    }
                  }
                }}
              />
            </div>
          )}

          {/* Text Content Section */}
          <div className=" overflow-hidden  text-center">
            <p className="text-sm h-[6vmin] overflow-hidden mt-2  lg:text-md text-gray-600">
              {sname}
            </p>
            <p className="text-sm lg:text-md text-gray-600">Rs. {price}</p>
          </div>
        </div>
        <div className="text-center overflow-hidden">
          {" "}
          <RatingStars rating={rating} />
        </div>
        <button
          className="btn p-1.5 mt-3 text-xs lg:p-2 overflow-hidden text-white bg-[#F58B75]"
          onClick={() => {
            if (authStatus.isAuthenticated) {
              // console.log("Hello World");
              setactiveCartId(_id);
              setCartClick(!cartClick);
            } else {
              if (screen.width > 1000) {
                setLoginlargescreen(true);
              } else {
                setLoginOpen(true);
              }
            }
          }}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
