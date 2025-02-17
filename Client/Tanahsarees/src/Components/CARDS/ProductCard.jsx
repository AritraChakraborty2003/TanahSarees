/* eslint-disable react/prop-types */

import { useState } from "react";
import Heart from "react-animated-heart";

import Tilt from "react-parallax-tilt";
const ProductCard = (props) => {
  const { image, name, price } = props.data;

  const [isClick, setClick] = useState(false);
  return (
    <>
      <div className="flex relative flex-col gap-y-2 lg:gap-y-3">
        <Tilt
          tiltMaxAngleX={0} // Tilt angle on X-axis
          tiltMaxAngleY={0} // Tilt angle on Y-axis
          scale={1.03} // Image zoom on hover
          transitionSpeed={500} // Smooth transition
          className="relative lg:ml-0  w-[45vw]  lg:w-63  bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Image Section */}
          <div className="relative overflow-hidden w-full h-2/3">
            <img
              src={image}
              alt="Tilted Image"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-x-[-100px] bottom-0 h-1/1 bg-gradient-to-t from-black/80 via-transparent"></div>
          </div>
        </Tilt>
        <div className="absolute bottom-[15%] right-[-5%] z-50">
          <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        </div>
        {/* Text Content Section */}
        <div className="lg:p-4 text-center">
          <p className="text-sm lg:text-md text-gray-600">{name}</p>
          <p className="text-sm lg:text-md text-gray-600">Rs. {price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
