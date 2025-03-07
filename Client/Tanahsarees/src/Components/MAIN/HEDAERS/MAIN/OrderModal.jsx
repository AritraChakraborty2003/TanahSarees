/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Modal from "react-modal";
import { AppContext } from "../../../../AppContext/AppContext";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root"); // Required for accessibility

const OrderModal = ({
  checkOrder,
  setCheckOrder,
  total,
  phone,
  address,
  handlePayment,
}) => {
  const navigate = useNavigate();
  const { toggleDrawer } = useContext(AppContext);

  // ✅ Close Modal
  const closeModal = () => setCheckOrder(false);

  return (
    <Modal
      isOpen={checkOrder}
      onRequestClose={closeModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          width: window.innerWidth > 1000 ? "65%" : "95%", // Responsive width
          maxWidth: "700px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim background
          zIndex: 2600,
        },
      }}
    >
      <a className="text-end mr-3">
        <i
          className="ri-close-line"
          onClick={() => {
            closeModal();
            toggleDrawer();
          }}
        ></i>
      </a>
      {/* ✅ Order Details */}
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        Order Details
      </h2>
      <p className="text-lg font-medium text-gray-600 mt-3">
        Total: <span className="font-bold text-black">₹{total}</span>
      </p>

      {/* ✅ Personal Details Section */}
      <h3 className="text-lg font-semibold text-gray-700 mt-5">
        Personal Details
      </h3>
      {phone || address ? (
        <div className="mt-2">
          <p className="text-gray-600">📞 Phone: {phone || "No data found"}</p>
          <p className="text-gray-600">
            🏠 Address: {address.replaceAll(":", ",") || "No data found"}
          </p>
        </div>
      ) : (
        <p className="text-red-500 mt-2">⚠ No address or phone found</p>
      )}

      {/* ✅ Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        {/* Update Button (Always Present) */}
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => {
            closeModal();
            toggleDrawer();
            navigate("/profile");
          }}
        >
          Update
        </button>

        {/* Checkout Button (Only if details exist) */}
        {phone && address && (
          <button
            className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition"
            onClick={() => {
              closeModal();
              toggleDrawer();
              handlePayment();
            }}
          >
            Checkout
          </button>
        )}
      </div>
    </Modal>
  );
};

export default OrderModal;
