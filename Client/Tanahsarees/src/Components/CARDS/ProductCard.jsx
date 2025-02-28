/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Heart from "react-animated-heart";
import Tilt from "react-parallax-tilt";
import { AppContext } from "../../AppContext/AppContext";
import { useCheckAuth } from "../../Utils/useCheckAuth";
// import { useHandleCart } from "../../Utils/useHandleCart";

const ProductCard = (props) => {
  const authStatus = useCheckAuth(null, "auth");
  const { setLoginlargescreen, setLoginOpen } = useContext(AppContext);
  const [isQuickView, setIsQuickView] = useState(false);
  const [isFavorite, setIsFavourite] = useState(true);
  const [isClick, setClick] = useState(false);
  const { _id, photo, sname, price } = props.data;
  const { type, Fav } = props;

  const {
    activeProduct,
    setActiveProduct,
    activeFilter,
    setActiveFilter,
    filteredData,
    setFilteredData,
    cartClick,
    setCartClick,
    activeCartId,
    setactiveCartId,
  } = useContext(AppContext);

  useEffect(() => {
    if (Fav === true) {
      setClick(true);
    }
  }, []);

  // const res = useHandleCart();

  return (
    <div className="flex flex-col mt-6 lg:mt-0">
      <div
        className="flex relative flex-col gap-y-2 lg:gap-y-1"
        onMouseEnter={() => setIsQuickView(true)}
        onMouseLeave={() => setIsQuickView(false)}
      >
        <Tilt
          tiltMaxAngleX={0} // Tilt angle on X-axis
          tiltMaxAngleY={0} // Tilt angle on Y-axis
          scale={1.03} // Image zoom on hover
          transitionSpeed={500} // Smooth transition
          className="relative lg:ml-0 w-[45vw] lg:w-63 bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Instead of using navigate, wrap the image in a Link */}
          <Link
            to="/product_descr"
            onClick={() => {
              setActiveProduct(props.data);
              setActiveFilter(false);
              setFilteredData([]); // Reset filter data on click
              window.scrollTo(0, 0);
            }}
            className="block"
          >
            <div className="relative overflow-hidden w-full h-2/3">
              <img
                src={`${import.meta.env.VITE_APP_API_URL}` + photo}
                alt="Tilted Image"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-x-[-100px] bottom-0 h-full bg-gradient-to-t from-black/80 via-transparent"></div>
            </div>
          </Link>
        </Tilt>

        {/* Quick View Section with Transition */}
        {type === "favourite" && (
          <>
            <div
              className={`absolute w-[96%] lg:text-[1.85vmin] p-1 font-poppins bg-[#F58B75] text-amber-50 flex justify-center border-amber-50 bottom-[24.3%] right-[1.9%] 
              transition-all duration-300 ease-in-out transform ${
                isQuickView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              Quick View
            </div>

            {/* Favorite Heart */}
            <div className="absolute bottom-[15.1%] right-[-5%] z-50 scale-60">
              <Heart
                isClick={isFavorite}
                onClick={() => setIsFavourite(!isFavorite)}
              />
            </div>
          </>
        )}

        {/* Default Heart */}
        {type !== "favourite" && (
          <div className="absolute bottom-[15%] right-[-5%] z-50">
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
          </div>
        )}

        {/* Text Content Section */}
        <div className="lg:p-2 text-center">
          <p className="text-sm lg:text-md text-gray-600">
            {sname.slice(0, 19) + "..."}
          </p>
          <p className="text-sm lg:text-md text-gray-600">Rs. {price}</p>
        </div>
      </div>
      <button
        className="btn p-2 text-white bg-[#F58B75]"
        onClick={() => {
          if (authStatus.isAuthenticated) {
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
  );
};

export default ProductCard;
