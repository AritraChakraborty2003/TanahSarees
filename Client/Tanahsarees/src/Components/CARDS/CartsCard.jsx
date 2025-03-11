import { useContext, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { AppContext } from "../../AppContext/AppContext";

/* eslint-disable react/prop-types */
const CartsCard = (props) => {
  const { photo, sname, price, discount, type, qty, _id } = props.data;

  const [count, setCount] = useState(qty);
  const { cartDrawerTigger, setCartDrawerTigger } = useContext(AppContext);
  console.log(props.data);
  console.log("hi");

  const updateQuantity = async (productId, action) => {
    console.log("pid:", productId);
    try {
      await axios.patch(
        `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/cart/${action}`,
        { pid: productId },
        { withCredentials: true }
      );
      action === "increase" ? setCount(count + 1) : setCount(count - 1);

      setCartDrawerTigger(!cartDrawerTigger); // Trigger update in MainHeader
    } catch (error) {
      console.error("Failed to update cart", error);
    }
  };

  return (
    <>
      <>
        <div
          className="flex h-[40vmin] lg:h-[28vmin] w-[80vw] lg:w-[35vw] pl-3"
          id={_id}
        >
          <div className=" p-1 w-[30%]">
            <img
              src={`${import.meta.env.VITE_APP_API_URL}` + photo}
              alt="Tilted Image"
              className="max-w-full max-h-full object-contain "
            />
          </div>
          <div className="flex flex-col items-center h-[100%] w-[70%]">
            <div className="info text-[3.35vmin] lg:text-[2vmin] w-[100%] h-[30%]  flex items-center font-Montserrat text-gray-500">
              <p className="ml-2">{sname}</p>
            </div>
            <div className="info  w-[100%] h-[15%] flex items-center font-Montserrat">
              <p className="text-sm text-gray-500 ml-2 ">
                <span className="font-bold darktxt text-[3.35vmin] lg:text-[2vmin]">
                  discount&nbsp;:&nbsp;
                </span>
                {discount ? discount : 0}% off
              </p>
            </div>
            <div className="info  w-[100%] h-[15%] flex items-center font-Montserrat">
              <p className="text-sm text-gray-500 ml-2 ">
                <span className="font-bold darktxt text-[3.35vmin] lg:text-[2vmin]">
                  Type&nbsp;:&nbsp;
                </span>
                {type}
              </p>
            </div>
            <div className="info  w-[100%] h-[15%] flex items-center font-Montserrat">
              <p className="text-md text-gray-500 ml-2 ">
                <span className="font-bold darktxt">price&nbsp;:&nbsp;</span>
                ₹&nbsp;{price}
              </p>
            </div>
            <div className="info w-[100%] h-[25%] flex items-center">
              <div className="main w-[55%] mt-2 lg:mt-1 lg:w-[45%] ml-4 lg:ml-2 border-[#262424] border-1 h-[65%]  lg:h-[80%] flex items-center">
                <div
                  className="decrement border-r-1 border-[#262424] w-[25%] h-full flex justify-center items-center overflow-hidden "
                  id={`decr${_id}`}
                  onMouseEnter={() => {
                    document.getElementById(`minus${_id}`).style.color =
                      "#EEE5DA";
                    document.getElementById(
                      `decr${_id}`
                    ).style.backgroundColor = "#26242489";
                  }}
                  onMouseLeave={() => {
                    document.getElementById(`minus${_id}`).style.color =
                      "#262424";
                    document.getElementById(
                      `decr${_id}`
                    ).style.backgroundColor = "#fff";
                  }}
                  onClick={() => {
                    count > 0 ? updateQuantity(_id, "decrease") : null;
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
                    document.getElementById(`plus${_id}`).style.color =
                      "#EEE5DA";
                    document.getElementById(
                      `incr${_id}`
                    ).style.backgroundColor = "#26242489";
                  }}
                  onMouseLeave={() => {
                    document.getElementById(`plus${_id}`).style.color =
                      "#262424";
                    document.getElementById(
                      `incr${_id}`
                    ).style.backgroundColor = "#fff";
                  }}
                  onClick={() => {
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
      </>
    </>
  );
};

export default CartsCard;
