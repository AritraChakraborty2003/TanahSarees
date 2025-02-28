/* eslint-disable no-unused-vars */
import { AppContext } from "../../AppContext/AppContext";
import { useContext, useState, useEffect } from "react";

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
    activeProduct,
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

  const { photo, material, price, discount, sname, colour, type, _id, rating } =
    activeProduct;

  console.log(activeProduct);

  const { change } = useContext(AppContext);
  const [OpenImage, setOpenImage] = useState(false);

  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const data = [
    {
      image: "/Sarees/saree7.jpg",
      title: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree3.jpg",
      title: "Silk raw mango",
      price: "3000",
    },
    {
      image: "/Sarees/saree10.jpg",
      title: "Silk raw mango",
      price: "3000",
    },

    {
      image: "/Sarees/saree9.jpg",
      title: "Silk raw mango",
      price: "3000",
    },
  ];

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

  // Sample FAQ data
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
          <div className="leftImageHolder w-[98vw] lg:w-[50vw] lg:h-[100vh] flex justify-center items-center mt-10">
            <div className="imageHolder mt-[-1.75vmin] lg:mt-0 w-[75%]  h-[88vmin] lg:w-[78%] lg:h-[95vmin]  flex justify-end items-center">
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
            </div>
          </div>
          <div className="rightTextHolder w-[98vw] lg:w-[50vw] text-[#7f7273]">
            <div className="small_descr">
              <p className="mt-5 ml-4 text-sm  lg:text-xs font-Montserrat ">
                Home&nbsp;&nbsp;/&nbsp;&nbsp; Sarees&nbsp;&nbsp; /
              </p>
            </div>
            <div className="saree_name">
              <p className="mt-5 ml-4  text-xl  lg:text-2xl font-Montserrat ">
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
                <button className="bg-[#f58b75] rounded-xs   lg:w-[32vmin] p-3   font-Montserrat text-black text-center ">
                  <a href="" className="font-Montserrat font-medium">
                    <i className="ri-shopping-bag-line"></i>
                  </a>{" "}
                  <span
                    className="ml-2 text-sm lg:text-md"
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
                    ADD TO CART
                  </span>
                </button>
              </div>

              <div className="wishlist">
                <button className="bg-white rounded-xs border-[#d5d5d5] border-[0.1px]   lg:w-[32vmin] p-3 font-Montserrat text-black text-center ">
                  <a href="" className="font-Montserrat font-medium">
                    <i className="ri-heart-line"></i>
                  </a>{" "}
                  <span className="ml-3 text-sm lg:text-md">ADD WISHLIST</span>
                </button>
              </div>
            </div>

            <div className="lineHolder ml-5 mt-3">
              <div className="line w-[90%]  h-[1px] bg-[#d5d5d5] mt-2"></div>
            </div>
            <div className="detailsArea mt-2 ml-5">
              <p className="font-normal darktext text-sm font-Montserrat text-[#7f7273]">
                Product Details
              </p>
              {productDetails.map((detail, index) => (
                <p
                  key={index}
                  className="mt-1 text-[3vmin] lg:text-xs font-Montserrat darktext font-light"
                >
                  {detail}
                </p>
              ))}
            </div>
            <div className="MaterialArea ml-5 mt-3">
              <p className="font-normal darktext text-sm font-Montserrat text-[#7f7273]">
                Material & Care
              </p>
              {materialDetails.map((detail, index) => (
                <p
                  key={index}
                  className="mt-1 text-[3vmin] lg:text-xs font-Montserrat darktext font-light"
                >
                  {detail}
                </p>
              ))}
            </div>
            <div className="ProductIdArea mt-3 ml-5">
              <p className="font-normal darktext text-sm font-Montserrat text-[#7f7273]">
                Product Id
              </p>
              {IdDetails.map((id, index) => (
                <p
                  key={index}
                  className="mt-1  text-[3vmin] lg:text-xs font-Montserrat darktext font-light"
                >
                  {id}
                </p>
              ))}
            </div>
            <div className="FAQ_Area w-[98%] lg:w-[80%] ml-3 mt-6">
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
            <p className="ml-5 text-gray-500 font-normal font-Montserrat text-2xl">
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
                className="ri-close-line text-4xl darktext mr-5 mt-2"
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
