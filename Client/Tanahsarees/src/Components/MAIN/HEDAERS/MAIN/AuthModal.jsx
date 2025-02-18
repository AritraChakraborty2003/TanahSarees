/* eslint-disable react/prop-types */
import { useState } from "react";

const AuthModal = ({ isOpen, onClose, isLogin }) => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="w-[90vw] max-w-md p-4 bg-white rounded-xs shadow-lg ">
        <h2 className="text-2xl font-bold text-center mb-2">
          {isLogin ? "Login" : "Signup"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          <input
            type="text"
            name="identifier"
            placeholder="Email or Phone Number"
            value={formData.identifier}
            onChange={handleChange}
            required
            className="w-full p-2 border-b-[1px] outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2  border-b-[1px] outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
