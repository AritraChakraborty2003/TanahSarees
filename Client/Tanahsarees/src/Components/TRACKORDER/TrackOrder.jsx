import { useState } from "react";

const TrackOrder = () => {
  const [searchBy, setSearchBy] = useState("orderId");
  const [orderId, setOrderId] = useState("");

  return (
    <>
      <div
        className="w-[100vw] h-[50vh] flex justify-center items-center "
        style={{
          marginTop: `${screen.width > 1000 ? "20%" : ""}`, // Adjust based on header height
          zIndex: 10, // Keep content below the header
        }}
      >
        <div className="bg-[#eee4e42c] p-6 rounded-lg shadow-md w-[93vw] lg:w-[45%] flex flex-col space-y-4 ">
          {/* First internal div (Search By section) */}
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1">Search By:</label>
            <select
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
              className="border-b-[0.5px] p-2 mt-2 focus:outline-none  "
            >
              <option value="orderId">Order ID/No</option>
              <option value="trackingId">Tracking ID/AWB</option>
            </select>
          </div>

          {/* Second internal div (Input & Button) */}
          <div className="flex space-x-4">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder={
                searchBy === "orderId"
                  ? "Enter Your Order ID/No"
                  : "Enter Your Tracking ID/AWB"
              }
              className=" flex-1 p-2  focus:outline-none border-b-[0.5px]"
            />
            <button className="bg-[#883022] text-white px-4 py-2 rounded-md hover:bg-[#6f241a] transition">
              Track
            </button>
          </div>

          {/* Third internal div (Paragraph) */}
          <div>
            <p className="text-sm text-gray-500 ">
              Check current status of your shipment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
