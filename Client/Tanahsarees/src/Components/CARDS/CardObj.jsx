/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
const CardObj = (props) => {
  const navigate = useNavigate();
  const { data } = props;
  const { activeProduct, setActiveProduct, index, setIndex } =
    useContext(AppContext);
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6  lg:gap-x-17 2xl:gap-x-17 cursor-pointer">
        {data.map((item) => (
          <div className="flex  flex-col gap-y-2 lg:gap-y-1 2xl:gap-y-5">
            <Tilt
              tiltMaxAngleX={15} // Tilt angle on X-axis
              tiltMaxAngleY={15} // Tilt angle on Y-axis
              scale={1.03} // Image zoom on hover
              transitionSpeed={500} // Smooth transition
              className="relative lg:ml-0  w-[45vw]  lg:w-64  dark  shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              {props.for === "like" ? (
                <div
                  className="relative overflow-hidden w-full h-2/3"
                  onClick={() => {
                    setActiveProduct(item);
                    localStorage.setItem("activeProduct", JSON.stringify(item));
                    setIndex(0);
                    navigate("/product_descr");

                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    src={`${import.meta.env.VITE_APP_API_URL}` + item.photo}
                    alt="Tilted Image"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ) : (
                <a href="/products">
                  <div className="relative overflow-hidden w-full h-2/3">
                    <img
                      src={`${import.meta.env.VITE_APP_API_URL}` + item.photo}
                      alt="Tilted Image"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </a>
              )}
            </Tilt>
            {/* Text Content Section */}
            <div className="lg:p-1  w-[45vw] font-Montserrat text-center  lg:w-64 h-15 lg:h-20">
              <p className="text-sm mt-4 pl-1 pr-1  pt-2 text-[3vmin] lg:text-[1.65vmin] 2xl:text-[1.95vmin] darktxt">
                {item.sname}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardObj;
