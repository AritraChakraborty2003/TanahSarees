/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { AppContext } from "../../AppContext/AppContext";
import { useNavigate } from "react-router-dom";

const CartDisplay = ({ data, chosen, setChosen }) => {
  const [isQuickView, setIsQuickView] = useState(false);
  const { photo, sname, price, _id, qty } = data;
  const [count, setCount] = useState(qty);
  const navigate = useNavigate();
  const { activeProduct, setActiveProduct, newvar, setnewvar } =
    useContext(AppContext);

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setChosen((prev) => [...prev, _id]); // Add item ID
    } else {
      setChosen((prev) => prev.filter((id) => id !== _id)); // Remove if unchecked
    }
  };

  const updateQuantity = async (productId, action) => {
    console.log("pid:", productId);
    try {
      await axios.patch(
        `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/cart/${action}`,
        { pid: productId },
        { withCredentials: true }
      );
      action === "increase" ? setCount(count + 1) : setCount(count - 1);

      setCartDrawerTigger(!cartDrawerTigger);
      setnewvar(!newvar); // Trigger update in MainHeader
    } catch (error) {
      console.error("Failed to update cart", error);
    }
  };

  return (
    <div className="flex flex-col border-1 border-gray-200 rounded-lg shadow-lg">
      <div
        className="flex relative flex-col mb-4 w-[40vw] lg:w-[15vw] gap-y-2 lg:gap-y-1 cursor-pointer"

        // onMouseEnter={() => setIsQuickView(true)}
        // onMouseLeave={() => setIsQuickView(false)}
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
          <div
            onClick={() => {
              {
                console.log("clicked");
                setActiveProduct(data);
                navigate("/product_descr");

                window.scrollTo(0, 0);
              }
            }}
          >
            <img src={`${import.meta.env.VITE_APP_API_URL}` + photo} />
          </div>
        </Tilt>

        {/* Quick View */}
        {/* <div
          className={`absolute w-[96%] text-[3vmin] lg:text-[1.85vmin] p-1 font-poppins bg-[#F58B75] text-amber-50 flex justify-center border-amber-50 bottom-[26.5%] lg:bottom-[22.3%] right-[1.9%] 
              transition-all duration-300 ease-in-out transform ${
                isQuickView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
        >
          Quick View
        </div> */}

        {/* Name & Price */}
        <div className="flex flex-col text-center text-gray-600">
          <h2>{sname.slice(0, 22) + ".."}</h2>
          <p className="font-semibold">₹{price}</p>
          <div className="info w-[100%] h-[25%] flex items-center justify-center">
            <div className="main w-[55%] mt-2 lg:mt-1 lg:w-[45%] ml-4 lg:ml-2 border-[#262424]  text-center border-1 h-[65%]  lg:h-[80%] flex items-center ">
              <div
                className="decrement border-r-1 border-[#262424] w-[25%] h-full flex justify-center items-center overflow-hidden "
                id={`decr${_id}`}
                onMouseEnter={() => {
                  document.getElementById(`minus${_id}`).style.color =
                    "#EEE5DA";
                  document.getElementById(`decr${_id}`).style.backgroundColor =
                    "#26242489";
                }}
                onMouseLeave={() => {
                  document.getElementById(`minus${_id}`).style.color =
                    "#262424";
                  document.getElementById(`decr${_id}`).style.backgroundColor =
                    "#fff";
                }}
                onClick={() => {
                  count > 0
                    ? (setCount(count - 1), updateQuantity(_id, "decrease"))
                    : null;
                }}
              >
                <p
                  className="darktxt text-2xl cursor-pointer"
                  id={`minus${_id}`}
                >
                  -
                </p>
              </div>
              <div className="value  w-[50%] h-full flex justify-center items-center overflow-hidden ">
                <motion.h1
                  key={count}
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-md font-bold"
                >
                  {count}
                </motion.h1>
              </div>
              <div
                className="increment border-[#262424] border-l-1  w-[25%] h-full  flex justify-center items-center overflow-hidden"
                id={`incr${_id}`}
                onMouseEnter={() => {
                  document.getElementById(`plus${_id}`).style.color = "#EEE5DA";
                  document.getElementById(`incr${_id}`).style.backgroundColor =
                    "#26242489";
                }}
                onMouseLeave={() => {
                  document.getElementById(`plus${_id}`).style.color = "#262424";
                  document.getElementById(`incr${_id}`).style.backgroundColor =
                    "#fff";
                }}
                onClick={() => {
                  setCount(count + 1);
                  updateQuantity(_id, "increase");
                }}
              >
                <p
                  className="darktxt text-2xl cursor-pointer"
                  id={`plus${_id}`}
                >
                  +
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDisplay;
