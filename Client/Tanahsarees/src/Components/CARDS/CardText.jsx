/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
import Modal from "react-modal";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
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

  // const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-wrap pb-4 justify-center items-center overflow-hidden cursor-pointer gap-x-4 gap-y-6 lg:gap-x-17 lg:gap-y-10 2xl:gap-y-3">
        {data.map((item) => (
          <div className="overflow-hidden ">
            <Tilt
              tiltMaxAngleX={screen.width > 800 ? 15 : 0} // Tilt angle on X-axis
              tiltMaxAngleY={screen.width > 800 ? 15 : 0} // Tilt angle on Y-axis
              scale={screen.width > 800 ? 1.03 : 1.01} // Image zoom on hover
              transitionSpeed={500} // Smooth transition
              className="relative  w-[45vw]  lg:w-64   shadow-lg overflow-hidden"
            >
              <a href="/products" className="overflow-hidden">
                <div className="flex flex-col  overflow-hidden gap-y-1">
                  {/* Image Section */}

                  <div className="relative overflow-hidden w-full h-2/3">
                    <img
                      src={`${import.meta.env.VITE_APP_API_URL}` + item.photo}
                      alt="Tilted Image"
                      className="w-full  h-full object-cover transition-transform duration-300 hover:scale-110"
                    />

                    {/* Black vignete */}
                    <div className="absolute inset-x-[-100px] bottom-0 h-1/1 bg-gradient-to-t from-black/100 via-transparent"></div>
                    {/* Text Content Section */}

                    <h2 className="absolute w-full  bottom-1 lg:bottom-3 text-lg lg:text-md flex pt-1 justify-center font-Montserrat lighttxt overflow-hidden">
                      {props.type === "selling" &&
                        props.type != "selling" &&
                        item.colour}
                    </h2>
                    {item.occasion && props.type === "occasion" ? (
                      <h2 className="absolute w-full bottom-5 lg:bottom-10 text-sm lg:text-lg font-Montserrat flex pt-1 justify-center lighttxt overflow-hidden">
                        {item.occasion}
                      </h2>
                    ) : (
                      ""
                    )}

                    {props.type === "collection" ? (
                      <h2 className="absolute w-full bottom-5 lg:bottom-10 text-sm lg:text-lg font-Roboto flex pt-1 justify-center lighttxt overflow-hidden">
                        {item.type}
                      </h2>
                    ) : (
                      ""
                    )}

                    {props.type === "material" ? (
                      <h2 className="absolute w-full bottom-3 lg:bottom-10 text-sm lg:text-lg font-Roboto flex pt-1 justify-center lighttxt overflow-hidden">
                        {item.material + " silk"}
                      </h2>
                    ) : (
                      ""
                    )}
                    <h3 className="absolute bottom-2   w-full  text-[#BCBBBC] text-Montserrat font-normal flex justify-center text-xl p-2 rounded text-[3.55vmin] lg:text-[2.45vmin]">
                      {item.title}
                    </h3>
                  </div>

                  {props.type === "testimonials" ? (
                    <>
                      <div>
                        <p className="p-2 text-gray-500 text-lg">
                          {item.material + "  silk"}
                        </p>
                        <p className="p-2 text-gray-500 text-sm">
                          {screen.width > 900
                            ? item.type.slice(0, 42) + "...."
                            : item.type.slice(0, 32) + "...."}
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
              </a>
            </Tilt>
            <h2 className=" w-[45vw] mt-4  lg:w-64 h-20 lg:h-30 font-Montserrat text-center pr-1 pl-1 text-[3vmin] lg:text-[1.65vmin] 2xl:text-[1.95vmin] font-light flex pt-1 justify-center   overflow-hidden">
              {props.type === "selling" && item.sname}
              {props.type === "occasion" && item.sname}
              {props.type === "material" && item.sname}
            </h2>
          </div>
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
