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
  const { activeProduct, setActiveProduct } = useContext(AppContext);
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6  lg:gap-x-17 2xl:gap-x-10 cursor-pointer">
        {data.map((item) => (
          <div className="flex  flex-col gap-y-2 lg:gap-y-1 2xl:gap-y-5">
            <Tilt
              tiltMaxAngleX={15} // Tilt angle on X-axis
              tiltMaxAngleY={15} // Tilt angle on Y-axis
              scale={1.03} // Image zoom on hover
              transitionSpeed={500} // Smooth transition
              className="relative lg:ml-0  w-[45vw]  lg:w-64  dark rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              {props.for === "like" ? (
                <div
                  className="relative overflow-hidden w-full h-2/3"
                  onClick={() => {
                    setActiveProduct(item);
                    localStorage.setItem("activeProduct", JSON.stringify(item));
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
            <div className="lg:p-1 text-center">
              <p className="text-sm lg:text-md 2xl:text-[2vmin] darktxt">
                {item.sname
                  ? screen.width > 1000
                    ? item.sname.slice(0, 20) + "..."
                    : item.sname.slice(0, 10) + "..."
                  : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardObj;
