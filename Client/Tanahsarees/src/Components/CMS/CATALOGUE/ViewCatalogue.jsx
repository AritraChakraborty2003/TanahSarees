/* eslint-disable react/prop-types */
import { useState } from "react";
import Tilt from "react-parallax-tilt";
const ViewCatalogue = (props) => {
  const [isQuickView, setIsQuickView] = useState(false);
  const { image, name, price } = props.data;
  return (
    <div className="flex flex-col pr-4 pb-5">
      <div
        className="flex relative flex-col mb-4 w-[35vw] lg:w-[12vw] gap-y-2 lg:gap-y-1 cursor-pointer"
        onMouseEnter={() => setIsQuickView(true)}
        onMouseLeave={() => setIsQuickView(false)}
      >
        <Tilt
          tiltMaxAngleX={0} // Tilt angle on X-axis
          tiltMaxAngleY={0} // Tilt angle on Y-axis
          scale={1.03} // Image zoom on hover
          transitionSpeed={500} // Smooth transition
          className="rounded-lg"
        >
          <img src={image} alt={name} />
        </Tilt>

        <div
          className={`absolute w-[96%] text-[3vmin] lg:text-[1.85vmin] p-1 font-poppins bg-[#F58B75] text-amber-50 flex justify-center border-amber-50 bottom-[26.5%] lg:bottom-[22.3%] right-[1.9%] 
              transition-all duration-300 ease-in-out transform ${
                isQuickView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
        >
          Quick View
        </div>
        <div className="absolute ml-[84%] lg:ml-[83%] darktext text-lg lg:text-3xl 2xl:text-xl mt-1.5 ">
          <p className="hover:shadow-lg hover:text-[red] transition-shadow duration-300">
            ⛌
          </p>
        </div>
        <div className="flex flex-col text-center text-gray-600">
          <h2>{name}</h2>
          <p>₹{price}</p>
        </div>
      </div>
      <button className="btn p-2 text-amber-50 font-normal bg-[#F58B75] font-poppins text-[3.35vmin] lg:text-[2.10vmin] cursor-pointer">
        Buy Now
      </button>
    </div>
  );
};

export default ViewCatalogue;
