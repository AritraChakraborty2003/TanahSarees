/* eslint-disable no-unused-vars */
import { AppContext } from "../../AppContext/AppContext";
import { useContext, useState, useEffect, useRef } from "react";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Modal from "react-modal";
import ControlledAccordions from "../TESTComp/ControlledAccordions";

import CardObj from "../CARDS/CardObj";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { DiscountUI } from "../../Utils/DiscountUI";
import UseHTTPRequest from "../../Utils/useHTTPRequest";
import CardText from "../CARDS/CardText";
import { useHandleCart } from "../../Utils/useHandleCart";
import { useCheckAuth } from "../../Utils/useCheckAuth";
import StarRating from "./StarRating";
// import { useEffect } from "react";
const Productdescription = () => {
  // const location = useLocation();
  // const navigate = useNavigate();

  const authStatus = useCheckAuth(null, "auth");
  const [sareeDataObj, setSareeDataObj] = useState([]);

  const dataObj = UseHTTPRequest(null, "/sarees", "GET", "");

  useEffect(() => {
    if (dataObj && JSON.stringify(dataObj) !== JSON.stringify(sareeDataObj)) {
      setSareeDataObj(dataObj);
    }
  }, [dataObj, sareeDataObj]);

  console.log("Data:", sareeDataObj);

  const {
    // activeProduct,
    setActiveProduct,
    activeFilter,
    setActiveFilter,
    filteredData,
    setFilteredData,
    setCartClick,
    activeCartId,
    setactiveCartId,
    setLoginOpen,
    setLoginlargescreen,
  } = useContext(AppContext);

  // Retrieve the existing activeProduct
  const activeProduct = JSON.parse(localStorage.getItem("activeProduct")) || {};

  // Dummy additional images
  const dummyImages = [
    "/Sarees/saree8.jpg",
    "/Sarees/saree1.jpg",
    "/Sarees/saree3.jpg",
    "/Sarees/saree4.jpg",
    "/Sarees/saree7.jpg",
  ];

  // Create an updated product object (without saving back to localStorage)
  const updatedProduct = {
    ...activeProduct,
    additionalPhoto: dummyImages, // Update only additionalPhoto
  };

  // Destructure updatedProduct directly for usage
  const {
    photo,
    additionalPhoto = [],
    material,
    price,
    discount,
    sname,
    colour,
    type,
    _id,
    rating,
  } = updatedProduct; // No need to save back

  const allPhotos = [photo, ...additionalPhoto];

  const { change } = useContext(AppContext);
  const [OpenImage, setOpenImage] = useState(false);

  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const productDetails = [
    `- ${colour} Semi Stitched saree in ${type}`,
    `- Made up of ${material} silk`,
    "- Accompanied with an Unstitched blouse and dupatta",
    "- Comes with the Tanahasrees promise of premium quality",
  ];

  const materialDetails = [
    "- Excellent and 100% pure silk",
    `- ${material} silk material`,
    "- Dry Wash Only",
    `- Rating: ${rating > 0 ? rating + " stars" : ""}`,
  ];

  // ✅ Function to handle accordion toggle
  const handleAccordionChange = (panelId) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panelId : null); // Only one can be open
  };

  /* Accordian Component Data*/
  const deatilsProductFaq = [
    {
      heading: "PRODUCT SPECIFICATION",
      details: `100% original ${type} saree in ${material}`,
    },
    {
      heading: "MATERIAL DETAILS",
      details: `Made from premium ${material} silk`,
    },
    { heading: "WASH CARE", details: "Dry wash only for best results" },
    { heading: "RETURN POLICY", details: "Easy 7-day return policy" },

    {
      heading: "RATE YOUR PRODUCT",
      details: (
        <>
          <StarRating sname={sname} photo={photo} />
        </>
      ),
    },
  ];

  const IdDetails = [
    `Product Id:${_id}`,

    "-Note: Product color may slightly vary due to photographic lighting sources or your monitor settings",
  ];
  const OpenImageModal = () => {
    setOpenImage(true);
  };

  const CloseImage = () => {
    setOpenImage(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "45vw",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
    overlay: {
      zIndex: 1600, // Ensuring it's above all elements
      backgroundColor: "rgba(0, 0, 0, 0.2)", // Light blur effect
      backdropFilter: "blur(15px)", // Optional blur effect
    },
  };

  const res = useHandleCart();
  const { PATCHClick, setPATCHClick, favItem, setFavItem } =
    useContext(AppContext);

  const data_res = UseHTTPRequest(
    null,
    "/favourites",
    "PATCH",
    favItem,
    "favourite"
  );

  const sliderRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div className="flex flex-col gap-y-6 pb-15">
        <div
          className="mainDiv lg:w-[100vw] flex flex-wrap"
          style={{
            marginTop: `${
              !change
                ? screen.width > 1000
                  ? "20%"
                  : ""
                : screen.width > 1000
                ? "12%"
                : ""
            }`, // Adjust based on header height
            zIndex: 10, // Keep content below the header
          }}
        >
<<<<<<< HEAD
          <div className="leftImageHolder w-[98vw]  lg:w-[50vw] lg:h-[100vh] flex flex-col gap-y-2 justify-center items-center mt-10 overflow-hidden">
            <div className="imageHolder relative mt-0  w-[75%] h-[88vmin] lg:w-[78%] lg:h-[95vmin] flex flex-col justify-end items-center overflow-hidden">
              <Slider
                ref={sliderRef}
                {...settings}
                className="w-full h-full overflow-hidden"
              >
                {allPhotos.map((img, index) => (
                  <div key={index} className="w-full h-full">
                    <img
                      // src={`${import.meta.env.VITE_APP_API_URL + img}`}
                      src={img}
                      alt={`Product Image ${index + 1}`}
                      className="max-w-full max-h-full object-contain "
                      // onClick={() => {
                      //   if (window.innerWidth > 1000) {
                      //     setOpenImage((prev) => !prev);
                      //   }
                      // }}
                    />
                  </div>
                ))}
              </Slider>
              {isLargeScreen ? (
                <>
                  <div className=" absolute z-10 flex top-[50%]  justify-evenly gap-x-5  items-center  w-[98vw] lg:w-[50vw] lg:h-[10vh]">
                    <button
                      onClick={() => sliderRef.current.slickPrev()}
                      className="absolute  bg-[#262424] text-white p-3 left-[15%] rounded-[120%] z-10"
                    >
                      ←
                    </button>

                    <button
                      onClick={() => sliderRef.current.slickNext()}
                      className="  absolute   bg-[#262424] right-[15%] text-white p-3 rounded-[120%] z-10"
                    >
                      →
                    </button>
                  </div>
                </>
              ) : (
                <div className=" absolute flex gap-x-3 text-2xl text-white pb-2 font-extrabold">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              )}
=======
          <div className="leftImageHolder w-[100vw] lg:w-[50vw] lg:h-[100vh] flex justify-center items-center mt-10">
            <div className="imageHolder mt-[-1.75vmin] lg:mt-0 w-[80%]  h-[94vmin] lg:w-[78%] lg:h-[95vmin]  flex justify-center items-center">
              <img
                src={`${import.meta.env.VITE_APP_API_URL + photo} `}
                alt="Product Image"
                className="max-w-full max-h-full object-contain"
                onClick={() => {
                  if (screen.width > 1000) {
                    setOpenImage(!OpenImage);
                  }
                }}
              />
>>>>>>> 3fe704d (UPDATE:update in code)
            </div>
          </div>
          <div className="rightTextHolder w-[98vw] lg:w-[50vw] darktxt">
            <div className="small_descr">
              <p className="mt-5 ml-4 text-sm  lg:text-xs font-Montserrat ">
                Home&nbsp;&nbsp;/&nbsp;&nbsp; Sarees&nbsp;&nbsp; /
              </p>
            </div>
            <div className="saree_name">
              <p className="mt-5 ml-4  text-xl  lg:text-xl font-Montserrat ">
                {sname}
              </p>
            </div>
            <div className="mrp_area  w-[90%]  mt-5 ml-5   ">
              <p className="mrp-text text-md lg:text-sm">
                <span className="font-medium font-poppins">MRP : </span>
                {discount ? (
                  <>
                    <span className="line-through">
                      {DiscountUI(Number(price), Number(discount))}
                    </span>{" "}
                    &nbsp;&nbsp;
                    <span>₹ {price}</span>
                    <span className="text-sm lg:text-sm ml-2">
                      ({discount}% Off)
                    </span>
                  </>
                ) : (
                  <span>₹{price}</span>
                )}
              </p>
              <p className=" text-sm lg:text-xs mt-2 ">
                Inclusive of All Taxes
              </p>
              <div className="line w-[95%]  h-[1px] bg-[#d5d5d5] mt-2"></div>
            </div>

            <div className="mt-3 ml-3 lg:ml-5  buttonHolder   w-[100%]  flex gap-x-5">
              <div className="addToCart">
                <button
                  className="dark rounded-xs   lg:w-[32vmin] p-3   font-Montserrat lighttxt text-center "
                  onClick={() => {
                    if (authStatus.isAuthenticated) {
                      setactiveCartId(activeProduct._id);
                      setCartClick(true);
                    } else {
                      if (screen.width > 1000) {
                        setLoginlargescreen(true);
                      } else {
                        setLoginOpen(true);
                      }
                    }
                  }}
                >
                  <a className="font-Montserrat font-medium">
                    <i className="ri-shopping-bag-line"></i>
                  </a>
                  <span className="ml-2 text-sm lg:text-md">ADD TO CART</span>
                </button>
              </div>

              <div className="wishlist">
                <button
                  onClick={() => {
                    if (authStatus.isAuthenticated) {
                      setFavItem(activeProduct._id);
                      setPATCHClick(true);
                    } else {
                      if (screen.width > 1000) {
                        setLoginlargescreen(true);
                      } else {
                        setLoginOpen(true);
                      }
                    }
                  }}
                  className="light rounded-xs border-[#d5d5d5] border-[0.1px]   lg:w-[32vmin] p-3 font-Montserrat darktxt text-center "
                >
                  <a className="font-Montserrat font-medium">
                    <i className="ri-heart-line"></i>
                  </a>
                  <span className="ml-3 text-sm lg:text-md">ADD WISHLIST</span>
                </button>
              </div>
            </div>

            <div className="lineHolder ml-5 mt-3">
              <div className="line w-[90%]  h-[1px] bg-[#d5d5d5] mt-2"></div>
            </div>
            <div className="detailsArea mt-2 ml-5">
              <p className="font-normal darktxt text-sm font-Montserrat darktxt">
                Product Details
              </p>
              {productDetails.map((detail, index) => (
                <p
                  key={index}
                  className="mt-1 text-[3vmin] lg:text-xs font-Montserrat darktxt font-light"
                >
                  {detail}
                </p>
              ))}
            </div>
            <div className="MaterialArea ml-5 mt-3">
              <p className="font-normal darktxt text-sm font-Montserrat darktxt">
                Material & Care
              </p>
              {materialDetails.map((detail, index) => (
                <p
                  key={index}
                  className="mt-1 text-[3vmin] lg:text-xs font-Montserrat darktxt font-light"
                >
                  {detail}
                </p>
              ))}
            </div>
            <div className="ProductIdArea mt-3 ml-5">
              <p className="font-normal darktxt text-sm font-Montserrat darktxt">
                Product Id
              </p>
              {IdDetails.map((id, index) => (
                <p
                  key={index}
                  className="mt-1  text-[3vmin] lg:text-xs font-Montserrat darktxt font-light"
                >
                  {id}
                </p>
              ))}
            </div>
            <div className="FAQ_Area w-[98%]  lg:w-[80%] ml-3 mt-6">
              {deatilsProductFaq.map((item, index) => (
                <ControlledAccordions
                  key={index}
                  id={index}
                  data={item}
                  expanded={expandedAccordion === index}
                  onChange={handleAccordionChange(index)}
                />
              ))}
            </div>
            <div className="imageHolder w-[98vw] lg:w-[80%] ml-3 lg:ml-5 mt-6">
              <img
                src="https://www.koskii.com/cdn/shop/files/Trust-Badges-India-revised_1024x.jpg?v=1665424996"
                alt="holder image"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="likeArea mt-8">
          <div className="likeHeader">
            <p className=" text-center dark lighttxt p-3 w-[100%]  font-normal font-Montserrat text-2xl">
              You might also like
            </p>
            <div className="mt-3 lg:mt-6">
              {sareeDataObj.length > 0 ? (
                <CardObj
                  for={"like"}
                  data={sareeDataObj
                    .filter(
                      (saree) =>
                        saree.material === material || saree.colour === colour
                    )
                    .slice(0, 4)}
                />
              ) : (
                <p>Data Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {OpenImage && (
        <Modal
          isOpen={OpenImageModal}
          onAfterOpen={OpenImageModal}
          onRequestClose={CloseImage}
          style={customStyles}
          contentLabel="Image Modal"
          shouldCloseOnOverlayClick={false}
        >
          <div className="holder flex flex-col">
            <div className="flex justify-end">
              <i
                className="ri-close-line text-4xl darktxt mr-5 mt-2"
                onClick={CloseImage}
              ></i>
            </div>
            <div className="w-[100%] flex justify-center items-center">
              <div className="imageHolder w-[78%] h-[75vmin]  flex justify-center items-center">
                <img
                  src={`${import.meta.env.VITE_APP_API_URL + photo} `}
                  alt="Product Image"
                  className="max-w-full max-h-full object-contain "
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Productdescription;
