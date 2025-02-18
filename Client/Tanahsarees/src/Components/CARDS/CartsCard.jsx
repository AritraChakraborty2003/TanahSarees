import { useState } from "react";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const CartsCard = (props) => {
  const { image, name, price, size, type } = props.data;
  const { id } = props;
  const [count, setCount] = useState(0);
  console.log(props.data);
  console.log("hi");

  return (
    <>
      <>
        <div className="flex h-[40vmin] lg:h-[28vmin] w-[80vw] lg:w-[35vw] pl-3">
          <div className=" p-1 w-[30%]">
            <img
              src={image}
              alt="Tilted Image"
              className="max-w-full max-h-full object-contain "
            />
          </div>
          <div className="flex flex-col items-center h-[100%] w-[70%]">
            <div className="info text-[4vmin] lg:text-[2.27vmin] w-[100%] h-[30%]  flex items-center font-Montserrat text-gray-500">
              <p className="ml-2">{name}</p>
            </div>
            <div className="info  w-[100%] h-[15%] flex items-center font-Montserrat">
              <p className="text-sm text-gray-500 ml-2 ">
                <span className="font-bold darktext">size&nbsp;:&nbsp;</span>
                {size}
              </p>
            </div>
            <div className="info  w-[100%] h-[15%] flex items-center font-Montserrat">
              <p className="text-sm text-gray-500 ml-2 ">
                <span className="font-bold darktext">Type&nbsp;:&nbsp;</span>
                {type}
              </p>
            </div>
            <div className="info  w-[100%] h-[15%] flex items-center font-Montserrat justify-end">
              <p className="text-sm text-gray-500 mr-10">
                <span className="font-bold darktext">price&nbsp;:&nbsp;</span>
                ₹&nbsp;{price}
              </p>
            </div>
            <div className="info w-[100%] h-[25%] flex items-center">
              <div className="main w-[55%] mt-2 lg:mt-1 lg:w-[45%] ml-4 lg:ml-2 border-[#883022] border-1 h-[65%]  lg:h-[80%] flex items-center">
                <div
                  className="decrement border-r-1 border-[#883022] w-[25%] h-full flex justify-center items-center overflow-hidden "
                  id={`decr${id}`}
                  onMouseEnter={() => {
                    document.getElementById(`minus${id}`).style.color = "#fff";
                    document.getElementById(`decr${id}`).style.backgroundColor =
                      "#F58b76";
                  }}
                  onMouseLeave={() => {
                    document.getElementById(`minus${id}`).style.color =
                      "#883022";
                    document.getElementById(`decr${id}`).style.backgroundColor =
                      "#fff";
                  }}
                  onClick={() => {
                    count > 0 ? setCount(count - 1) : null;
                  }}
                >
                  <p
                    className="darktext text-2xl cursor-pointer"
                    id={`minus${id}`}
                  >
                    -
                  </p>
                </div>
                <div className="value  w-[50%] h-full flex justify-center items-center ">
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
                  className="increment border-[#883022] border-l-1  w-[25%] h-full  flex justify-center items-center overflow-hidden"
                  id={`incr${id}`}
                  onMouseEnter={() => {
                    document.getElementById(`plus${id}`).style.color = "#fff";
                    document.getElementById(`incr${id}`).style.backgroundColor =
                      "#F58b76";
                  }}
                  onMouseLeave={() => {
                    document.getElementById(`plus${id}`).style.color =
                      "#883022";
                    document.getElementById(`incr${id}`).style.backgroundColor =
                      "#fff";
                  }}
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <p
                    className="darktext text-2xl cursor-pointer"
                    id={`plus${id}`}
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
