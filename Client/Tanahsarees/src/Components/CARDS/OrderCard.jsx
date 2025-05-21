/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import OrderStatusStepper from "./OrderStatusStepper"; // Correct import path
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const OrderCard = ({ data }) => {
  const [openStatusId, setOpenStatusId] = useState(null);
  const handleCancel = (order_id, pid) => {
    confirmAlert({
      title: "Confirm Delete Account",
      message: "Are you sure you want to cancel the order?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .patch(
                `${
                  import.meta.env.VITE_APP_API_URL_TEST
                }api/v1/orders/order/data?id=${order_id}`,
                { item_status: "cancelled", pid: pid }
              )
              .then(() => {
                toast.success("Order cancelled successfully!");
                setTimeout(() => {
                  window.location.reload();
                }, 800); // Refresh to show updated status
              })
              .catch((err) => {
                console.error("Failed to cancel order:", err);
                toast.error("Failed to cancel order. Please try again.");
              });
          },
        },
        {
          label: "No",
          onClick: () => console.log("Cancel canceled"),
        },
      ],
    });
  };

  const toggleStatus = (id) => {
    setOpenStatusId(openStatusId === id ? null : id);
  };

  const orders = data.orders;
  console.log("data:", data);
  return (
    <div className="font-Montserrat  w-full flex flex-col gap-y-3 items-center">
      {orders.map((item) => (
        <div
          key={item._id}
          className="relative w-[93vw] lg:w-[50vw] border-[1px] border-[#ccc9c9] flex flex-col items-center p-4 mt-4"
        >
          {/* Order Details */}
          <div className="w-full flex">
            <div className="w-[25%]">
              <img
                src={`${import.meta.env.VITE_APP_API_URL_TEST}${
                  item.pid.photo
                }`}
                alt={item.pid.photo}
                className="w-full"
              />
            </div>
            <div className="w-[75%] text-[2.15vmin] lg:text-[1.75vmin] ml-3  space-y-1 lg:space-y-2">
              <p>
                <span className="text-gray-500">PId:</span> {item.pid._id}
              </p>
              <p>
                <span className="text-gray-500">Name:</span> {item.pid.sname}
              </p>
              <p>
                <span className="text-gray-500">Price:</span> ₹{item.pid.price}
              </p>
              <p>
                <span className="text-gray-500">Status:</span>{" "}
                {item.item_status}
              </p>{" "}
              <p>
                <span className="text-gray-500">Quantity:</span> {item.qty}
              </p>
              <p>
                <span className="text-gray-500">Order-Id:</span> {item.order_id}
              </p>
              <p>
                <span className="text-gray-500">Support:</span>{" "}
                anup91700@gmail.com
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex justify-end mt-3 space-x-2">
            <button
              className="p-2 text-xs lg:text-[1.75vmin] bg-amber-600 text-white hover:bg-[#e18300]"
              onClick={() => toggleStatus(item._id)}
            >
              {openStatusId === item._id ? "Close Status" : "See Status"}
            </button>

            {/* Cancel Order Button */}
            <button
              className="p-2 text-xs lg:text-[1.75vmin] bg-red-600 text-white hover:bg-red-700"
              onClick={() => handleCancel(item.order_id, item.pid._id)}
            >
              Cancel Order
            </button>
          </div>

          {/* Status Stepper Display */}
          {openStatusId === item._id && (
            <div className="w-full mt-3 overflow-hidden transition-all duration-300">
              <OrderStatusStepper status={item.item_status} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
