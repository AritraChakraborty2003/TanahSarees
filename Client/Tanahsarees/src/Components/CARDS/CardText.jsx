/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
import Modal from "react-modal";
import { useState } from "react";
const CardText = (props) => {
  const { data } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  Modal.setAppElement("#root");
  const modalOpen = () => {
    setIsOpen(true);
  };
  const modalClose = () => {
    setIsOpen(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000, // Ensuring it's above all elements
    },
  };

  return (
    <>
      <div className="flex flex-wrap pb-4 justify-center items-center overflow-hidden cursor-pointer gap-x-5 gap-y-6 lg:gap-x-10 lg:gap-y-10">
        {data.map((item) => (
          <Tilt
            tiltMaxAngleX={screen.width > 800 ? 15 : 0} // Tilt angle on X-axis
            tiltMaxAngleY={screen.width > 800 ? 15 : 0} // Tilt angle on Y-axis
            scale={screen.width > 800 ? 1.03 : 1.01} // Image zoom on hover
            transitionSpeed={500} // Smooth transition
            className="relative w-[45vw]  lg:w-76 2xl:w-[44vmin]  rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex flex-col  overflow-hidden gap-y-3">
              {/* Image Section */}
              <div className="relative overflow-hidden w-full h-2/3">
                <img
                  src={item.image}
                  alt="Tilted Image"
                  className="w-full  h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {/* Black vignete */}
                <div className="absolute inset-x-[-100px] bottom-0 h-1/1 bg-gradient-to-t from-black/100 via-transparent"></div>
                {/* Text Content Section */}
                <h2 className="absolute w-full bottom-10 text-lg lg:text-4xl flex pt-1 justify-center font-GreatVibes text-[#DFC08A] overflow-hidden">
                  {item.maintitle}
                </h2>
                {item.description ? (
                  <p className="absolute bottom-10 text-[#BCBBBC] text-Montserrat font-normal flex text-center p-2">
                    {item.description}
                  </p>
                ) : (
                  ""
                )}
                <h3 className="absolute bottom-2   w-full  text-[#BCBBBC] text-Montserrat font-normal flex justify-center text-xl p-2 rounded text-[3.55vmin] lg:text-[2.45vmin]">
                  {item.title}
                </h3>
              </div>
              {item.name ? (
                <>
                  <div>
                    <p className="p-2 text-gray-500 text-lg">{item.name}</p>
                    <p className="p-2 text-gray-500 text-sm">
                      {screen.width > 900
                        ? item.review.slice(0, 42) + "...."
                        : item.review.slice(0, 32) + "...."}
                    </p>
                    <p
                      className="p-2 text-gray-500 text-[2.45vmin] lg:text-sm font-medium font-Montserrat"
                      onClick={modalOpen}
                    >
                      Read More
                    </p>
                  </div>
                </>
              ) : null}
            </div>
          </Tilt>
        ))}
      </div>

      {modalIsOpen ? (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={modalOpen}
          onRequestClose={modalClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={modalClose}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default CardText;
