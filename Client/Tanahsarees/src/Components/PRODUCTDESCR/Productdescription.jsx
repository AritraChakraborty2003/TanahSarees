import { AppContext } from "../../AppContext/AppContext";
import { useContext, useState } from "react";

import Modal from "react-modal";
const Productdescription = () => {
  const { change } = useContext(AppContext);
  const [OpenImage, setOpenImage] = useState(false);
  const data = {
    rows: [
      {
        title: "What is the package version",
        content: <p>current version is 1.2.1</p>,
      },
      {
        title: "Introduction to JavaScript",
        content:
          "JavaScript is a versatile programming language used for web development.",
      },
      {
        title: "React.js Basics",
        content:
          "React is a popular JavaScript library for building user interfaces.",
      },
      {
        title: "Node.js Overview",
        content:
          "Node.js allows JavaScript to run on the server-side, enabling backend development.",
      },
      {
        title: "MongoDB Fundamentals",
        content:
          "MongoDB is a NoSQL database that stores data in JSON-like documents.",
      },
      {
        title: "TypeScript Advantages",
        content:
          "TypeScript adds static typing to JavaScript, improving code quality and maintainability.",
      },
      {
        title: "Understanding Redux",
        content:
          "Redux is a state management library often used with React applications.",
      },
      {
        title: "AWS for Beginners",
        content:
          "Amazon Web Services (AWS) provides scalable cloud computing solutions.",
      },
      {
        title: "Version Control with Git",
        content:
          "Git is a distributed version control system for tracking changes in code.",
      },
    ],
  };

  const productDetails = [
    "- Sea Green Semi Stitched Lehenga in Tissue fabric",
    "- The Lehenga is embellished with Zariwork embroidery",
    "- Accompanied with an Unstitched blouse and dupatta",
    "- Comes with the Koskii promise of premium quality",
  ];

  const materialDetails = [
    "- Excellent and 100% pure silk",
    "- Raw Mango",
    "- Dry Wash Only",
  ];

  const IdDetails = [
    "-GCBR0040896_SEA_GREEN",

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
  return (
    <>
      <div className="flex flex-col gap-y-6">
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
          <div className="leftImageHolde w-[98vw] lg:w-[50vw] lg:h-[100vh] flex justify-center items-center border-1">
            <div className="imageHolder w-[78%] h-[83vmin]  flex justify-end items-center">
              <img
                src="Sarees/saree13.jpg"
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
          <div className="rightTextHolder w-[98vw] lg:w-[50vw] border-1 text-[#7f7273]">
            <div className="small_descr">
              <p className="mt-5 ml-4 text-sm  lg:text-xs font-Montserrat ">
                Home&nbsp;&nbsp;/&nbsp;&nbsp; Sarees&nbsp;&nbsp; /
              </p>
            </div>
            <div className="saree_name">
              <p className="mt-5 ml-4  text-3xl  lg:text-2xl font-Montserrat ">
                Sea Green Zariwork Tissue Semi Stitched Lehenga
              </p>
            </div>
            <div className="mrp_area  w-[90%]  mt-5 ml-5   ">
              <p className="mrp-text text-md lg:text-sm">
                <span className="font-medium font-poppins">MRP : </span>
                ₹30,900
              </p>
              <p className=" text-sm lg:text-xs mt-2 ">
                Inclusive of All Taxes
              </p>
              <div className="line w-[95%]  h-[1px] bg-[#d5d5d5] mt-2"></div>
            </div>

            <div className="mt-3 ml-5  buttonHolder   w-[100%]  flex gap-x-5">
              <div className="addToCart">
                <button className="bg-[#f58b75] rounded-xs w-[32vmin] p-3  font-Montserrat text-black text-center ">
                  <a href="" className="font-Montserrat font-medium">
                    <i className="ri-shopping-bag-line"></i>
                  </a>{" "}
                  <span className="ml-2">ADD TO CART</span>
                </button>
              </div>

              <div className="wishlist">
                <button className="bg-white rounded-xs border-[#d5d5d5d] border-[0.1px] w-[32vmin] p-3 font-Montserrat text-black text-center ">
                  <a href="" className="font-Montserrat font-medium">
                    <i className="ri-heart-line"></i>
                  </a>{" "}
                  <span className="ml-3">WISHLIST</span>
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
                  className="mt-1 text-xs font-Montserrat darktext font-light"
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
                  className="mt-1 text-xs font-Montserrat darktext font-light"
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
                  className="mt-1 text-xs font-Montserrat darktext font-light"
                >
                  {id}
                </p>
              ))}
            </div>
            <div className="FAQ_Area ml-[-3vmin] mt-3"></div>
          </div>
          <div className="imageHolder"></div>
        </div>
      </div>
      <div className="likeArea"></div>

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
                  src="Sarees/saree13.jpg"
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
