/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";

const TestinomialsCard = (props) => {
  const { review } = props;

  const [IstestimonialOpen, setIstestimonialClose] = useState(false);
  const TestimonialOpen = () => {
    setIstestimonialClose(true);
  };
  const TestimonialClose = () => {
    setIstestimonialClose(false);
  };

  const toggleTestinomialModal = () => {
    setIstestimonialClose(!IstestimonialOpen);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "96ww",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
      order: "none",
      boxShadow: "none",
    },
    overlay: {
      zIndex: 1600, // Ensuring it's above all elements
      backgroundColor: "rgba(0, 0, 0, 0.2)", // Light blur effect
      backdropFilter: "blur(1.5px)", // Optional blur effect
    },
  };

  const customStylesLarge = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
      order: "none",
      boxShadow: "none",
    },
    overlay: {
      zIndex: 1600, // Ensuring it's above all elements
      backgroundColor: "rgba(0, 0, 0, 0.2)", // Light blur effect
      backdropFilter: "blur(1.5px)", // Optional blur effect
    },
  };
  return (
    <>
      <div className="h-fit w-[48vw] lg:w-[30vw] border-[1px] border-[#d5d5d5] p-4 rounded-lg shadow-md bg-white">
        <div key={review.id} className="">
          <img
            src={`${import.meta.env.VITE_APP_API_URL}` + review.photo}
            alt={review.name}
            className="w-full h-36 lg:h-80 object-contain rounded-lg mb-3"
          />
          <div className="flex gap-x-4 mt-3">
            <h3 className="text-sm lg:text-lg font-bold">
              {screen.width > 1000 ? review.name : review.name.split(" ")[0]}
            </h3>

            <p className="mt-[1px] text-xs lg:text-lg">
              {Array.from({ length: review.rating }, (_, index) => (
                <span key={index} className="text-yellow-500">
                  ⭐
                </span>
              ))}
            </p>
          </div>
        </div>
        <p className="text-gray-700 mt-2  text-xs lg:text-[2.15vmin]">
          {review.review.slice(0, 40) + "..."}
        </p>
        <p
          className="text-end pr-3 text-xs lg:text-md text-[#00000] mt-3 lg:mt-1"
          onClick={toggleTestinomialModal}
        >
          read more...
        </p>
      </div>

      {screen.width > 1000 ? (
        <Modal
          isOpen={IstestimonialOpen}
          onAfterOpen={TestimonialOpen}
          onRequestClose={TestimonialClose}
          style={customStylesLarge}
          contentLabel="Small Login Modal"
        >
          <div className="pb-5">
            <div className="flex flex-col  justify-center items-center mt-2">
              <div>
                <a className="w-[30vw] flex justify-end text-3xl font-light font-Lato darktext mr-3 p-1">
                  <i
                    className="ri-close-line"
                    onClick={toggleTestinomialModal}
                  ></i>
                </a>
              </div>
              <div className="h-fit w-[30vw] border-[1px] border-[#d5d5d5] p-2 rounded-lg shadow-md bg-white pb-4">
                <div key={review.id} className="">
                  <img
                    src={`${import.meta.env.VITE_APP_API_URL}` + review.photo}
                    alt={review.name}
                    className="w-full h-80 object-contain rounded-lg mb-3"
                  />
                  <div className="flex gap-x-4 mt-3">
                    <h3 className="text-lg font-bold">{review.name}</h3>

                    <p className="mt-[1px] text-lg">
                      {Array.from({ length: review.rating }, (_, index) => (
                        <span key={index} className="text-yellow-500">
                          ⭐
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mt-2">{review.review}</p>
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        <Modal
          isOpen={IstestimonialOpen}
          onAfterOpen={TestimonialOpen}
          onRequestClose={TestimonialClose}
          style={customStyles}
          contentLabel="Small Login Modal"
        >
          <div className="pb-5">
            <div className="flex flex-col  justify-center items-center mt-2">
              <div>
                <a className="w-[80vw] flex justify-end text-3xl font-light font-Lato darktext mr-3 p-1">
                  <i
                    className="ri-close-line"
                    onClick={toggleTestinomialModal}
                  ></i>
                </a>
              </div>
              <div className="h-fit w-[88vw] border-[1px] border-[#d5d5d5] p-2 rounded-lg shadow-md bg-white pb-4 pt-3">
                <div key={review.id} className="">
                  <img
                    src={`${import.meta.env.VITE_APP_API_URL}` + review.photo}
                    alt={review.name}
                    className="w-full h-72 lg:h-80 object-contain rounded-lg mb-3"
                  />
                  <div className="flex gap-x-4 mt-3">
                    <h3 className="text-lg font-bold">{review.name}</h3>

                    <p className="mt-[1px]">
                      {Array.from({ length: review.rating }, (_, index) => (
                        <span key={index} className="text-yellow-500">
                          ⭐
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mt-2">{review.review}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default TestinomialsCard;
