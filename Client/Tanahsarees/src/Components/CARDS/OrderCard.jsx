/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import OrderStatusStepper from "./OrderStatusStepper"; // Correct import path

const OrderCard = ({ data }) => {
  const [openStatusId, setOpenStatusId] = useState(null);

  const toggleStatus = (id) => {
    setOpenStatusId(openStatusId === id ? null : id);
  };

  // Cancel Order Function
  const handleCancelOrder = (id) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      axios
        .patch(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/orders/data?id=${id}`,
          { status: "Cancelled" }
        )
        .then(() => {
          alert("Order cancelled successfully!");
          window.location.reload(); // Refresh to show updated status
        })
        .catch((err) => {
          console.error("Failed to cancel order:", err);
          alert("Failed to cancel order. Please try again.");
        });
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {data.map((order) => (
        <div
          key={order.pid}
          className="relative w-[93vw] lg:w-[50vw] border-[1px] border-[#ccc9c9] flex flex-col items-center p-4 mt-4"
        >
          {/* Order Details */}
          <div className="w-full flex">
            <div className="w-[25%]">
              <img
                src={order.image || "/placeholder.jpg"}
                alt={order.name}
                className="w-full"
              />
            </div>
            <div className="w-[75%] text-xs lg:text-lg ml-3">
              <p>
                <span className="text-gray-500">Name:</span> {order.name}
              </p>
              <p>
                <span className="text-gray-500">Price:</span> ₹{order.price}
              </p>
              <p>
                <span className="text-gray-500">Status:</span> {order.status}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex justify-end mt-3 space-x-2">
            <button
              className="p-2 text-xs lg:text-lg bg-amber-600 text-white hover:bg-[#e18300]"
              onClick={() => toggleStatus(order.pid)}
            >
              {openStatusId === order.pid ? "Close Status" : "See Status"}
            </button>

            {/* Cancel Order Button */}
            <button
              className="p-2 text-xs lg:text-lg bg-red-600 text-white hover:bg-red-700"
              onClick={() => handleCancelOrder(order.pid)}
            >
              Cancel Order
            </button>
          </div>

          {/* Status Stepper Display */}
          {openStatusId === order.pid && (
            <div className="w-full mt-3 overflow-hidden transition-all duration-300">
              <OrderStatusStepper status={order.status} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
