/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Modal from "react-modal";
import { AppContext } from "../../../../AppContext/AppContext";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root"); // Required for accessibility

const NameModal = ({ checkState, setCheckState }) => {
  const navigate = useNavigate();

  const { toggleDrawer } = useContext(AppContext);

  // ✅ Close Modal
  const closeState = () => setCheckState(false);

  return (
    <Modal
      isOpen={checkState}
      onRequestClose={closeState}
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
            closeState();
          }}
        ></i>
      </a>

      <p className="text-red-500 mt-2">⚠ No name found. Please update name</p>

      <div className="flex justify-end gap-4 mt-6">
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => {
            closeState();
            navigate("/profile");
            window.scroll(0, 0);
          }}
        >
          Update
        </button>
      </div>
    </Modal>
  );
};

export default NameModal;
