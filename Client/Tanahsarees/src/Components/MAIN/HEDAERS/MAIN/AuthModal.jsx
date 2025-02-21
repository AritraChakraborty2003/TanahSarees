/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { AppContext } from "../../../../AppContext/AppContext";

const AuthModal = ({ isOpen, onClose }) => {
  const { isLogin, setIsLogin } = useContext(AppContext);

  // ✅ Fixed: Separate email, phone, and password in state
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  // ✅ Fixed: Correct state updates for each input field
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onClose();
  };

  if (!isOpen) return null;

  // ✅ Google Login
  const login = useGoogleLogin({
    onSuccess: (response) => console.log("Google Auth Response:", response),
    onError: () => console.log("Google Login Failed"),
  });

  return (
    <div className="inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[90vw] max-w-md p-6 bg-white rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-2 mt-3">
          {isLogin ? "Login" : "Signup"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 mt-6">
          {/* ✅ Fixed: Separate state field for email */}
          <input
            type="text"
            name="email"
            placeholder="Email..."
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 text-md border-b border-gray-300 outline-none"
          />

          {/* ✅ Show phone number input only for Signup */}
          {!isLogin && (
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number..."
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 text-md border-b border-gray-300 outline-none"
            />
          )}

          {/* ✅ Fixed: Password field */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 text-md border-b border-gray-300 outline-none"
          />

          {/* ✅ Login/Signup toggle */}
          {isLogin ? (
            <div className="flex flex-col items-center">
              <p
                className="mt-2 text-xs darktext cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Don&apos;t have an account?
              </p>
              <p
                className="mt-2 text-xs darktext cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Forgot Password?
              </p>
            </div>
          ) : (
            <p
              className="mt-2 text-xs darktext cursor-pointer"
              onClick={() => setIsLogin(true)}
            >
              Already have an account?
            </p>
          )}

          {/* ✅ Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#883022] text-white p-2 rounded"
          >
            {isLogin ? "Login" : "Signup"}
          </button>

          {/* ✅ Google Login Button */}
          <div className="google-btn">
            <button
              onClick={login}
              style={{
                border: "1px solid #d5d5d5",
                padding: screen.width > 1000 ? "1.35vmin" : "2.35vmin",
                width: "100%",
                fontSize: "16px",
                borderRadius: "5px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-Photo-Image.png"
                alt="Google logo"
                style={{ width: "20px", marginRight: "10px" }}
              />
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
