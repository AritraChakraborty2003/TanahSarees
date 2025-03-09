/* eslint-disable react/prop-types */
import { useState } from "react";
import OrderStatusStepper from "../CARDS/OrderStatusStepper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";

const OrderCard = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openStatusId, setOpenStatusId] = useState(null);

  const toggleStatus = (id) => {
    setOpenStatusId(openStatusId === id ? null : id);
  };
  console.log("orderpage", data);
  const handleCancel = async (pid) => {
    try {
      await axios.patch("http://localhost:8040/api/v1/orders/cancel", { pid });
      console.log("Order canceled successfully");
    } catch (error) {
      console.error("Error canceling order:", error);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-[93vw] lg:w-[50vw] border-[1px] border-[#ccc9c9] flex flex-col items-center p-4 overflow-hidden">
        {/* Left Arrow */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Order Card */}
        <div
          key={data[currentIndex].pid}
          className="w-full flex flex-col items-center"
        >
          <div className="flex w-full">
            <div className="w-[25%]">
              <img
                src={data[currentIndex].image || "/placeholder.jpg"}
                alt={data[currentIndex].name}
                className="w-full"
              />
            </div>
            <div className="w-[75%] text-xs lg:text-lg ml-3">
              <p>
                <span className="text-gray-500">Name:</span>{" "}
                {data[currentIndex].name}
              </p>
              <p>
                <span className="text-gray-500">Price:</span> ₹{" "}
                {data[currentIndex].price}
              </p>
              <p>
                <span className="text-gray-500">Status:</span>{" "}
                {data[currentIndex].status}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-end mt-3">
            <button
              className="p-2 text-xs lg:text-lg bg-amber-600 text-white hover:bg-[#e18300] mr-2"
              onClick={() => toggleStatus(data[currentIndex].pid)}
            >
              {openStatusId === data[currentIndex].pid
                ? "Close Status"
                : "See Status"}
            </button>
            <button
              className="p-2 text-xs lg:text-lg bg-red-600 text-white hover:bg-red-800"
              onClick={() => handleCancel(data[currentIndex].pid)}
            >
              Cancel Order
            </button>
          </div>
          {openStatusId === data[currentIndex].pid && (
            <div className="w-full mt-3 overflow-hidden transition-all duration-300">
              <OrderStatusStepper status={data[currentIndex].status} />
            </div>
          )}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
