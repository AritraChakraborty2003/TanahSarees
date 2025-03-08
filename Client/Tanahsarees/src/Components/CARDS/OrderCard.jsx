/* eslint-disable react/prop-types */
import OrderStatusStepper from "../CARDS/OrderStatusStepper";
import { useState } from "react";

const OrderCard = ({ data }) => {
  const [openStatusId, setOpenStatusId] = useState(null);

  const toggleStatus = (id) => {
    setOpenStatusId(openStatusId === id ? null : id);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {data.map((item) => (
        <div
          className="w-[93vw] lg:w-[50vw] mb-5 border-[1px] border-[#ccc9c9] flex flex-col items-center p-4"
          key={item.id}
        >
          <div className="flex w-full">
            <div className="w-[25%]">
              <img src={item.image} alt={item.name} className="w-full" />
            </div>
            <div className="w-[75%] text-xs lg:text-lg ml-3">
              <p>
                <span className="text-gray-500">Name:</span>&nbsp;
                {item.name}
              </p>
              <p>
                <span className="text-gray-500">Price:</span>&nbsp;₹&nbsp;
                {item.price}
              </p>
              <p>
                <span className="text-gray-500">Status:</span>&nbsp;
                {item.status}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-end mt-3">
            <button
              className="p-2 text-xs lg:text-lg bg-amber-600 text-white hover:bg-[#e18300] mr-2"
              onClick={() => toggleStatus(item.id)}
            >
              {openStatusId === item.id ? "Close Status" : "See Status"}
            </button>
            <button className="p-2 text-xs lg:text-lg bg-amber-600 text-white hover:bg-[#e18300]">
              Return Order
            </button>
          </div>

          {/* OrderStatusStepper will slide down smoothly */}
          {openStatusId === item.id && (
            <div className="w-full mt-3 overflow-hidden transition-all duration-300">
              <OrderStatusStepper status={item.status} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
