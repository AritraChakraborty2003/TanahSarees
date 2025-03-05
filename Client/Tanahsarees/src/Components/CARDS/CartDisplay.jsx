/* eslint-disable react/prop-types */
import { useState } from "react";
import Tilt from "react-parallax-tilt";

const CartDisplay = ({ data, chosen, setChosen }) => {
  const [isQuickView, setIsQuickView] = useState(false);
  const { image, name, price, _id } = data;

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setChosen((prev) => [...prev, _id]); // Add item ID
    } else {
      setChosen((prev) => prev.filter((id) => id !== _id)); // Remove if unchecked
    }
  };

  return (
    <div className="flex flex-col border-1 border-gray-200 rounded-lg shadow-lg">
      <div
        className="flex relative flex-col mb-4 w-[40vw] lg:w-[15vw] gap-y-2 lg:gap-y-1 cursor-pointer"
        onMouseEnter={() => setIsQuickView(true)}
        onMouseLeave={() => setIsQuickView(false)}
      >
        {/* Checkbox */}
        <div className="absolute z-50 top-2 left-2">
          <input
            type="checkbox"
            value={_id}
            checked={chosen.includes(_id)} // Check if ID exists in chosen
            onChange={handleCheckboxChange}
            className="w-5 h-5"
          />
        </div>

        {/* Image */}
        <Tilt
          tiltMaxAngleX={0}
          tiltMaxAngleY={0}
          scale={1.03}
          transitionSpeed={500}
          className="rounded-lg"
        >
          <img src={image} alt={name} />
        </Tilt>

        {/* Quick View */}
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

        {/* Name & Price */}
        <div className="flex flex-col text-center text-gray-600">
          <h2>{name}</h2>
          <p>₹{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartDisplay;
