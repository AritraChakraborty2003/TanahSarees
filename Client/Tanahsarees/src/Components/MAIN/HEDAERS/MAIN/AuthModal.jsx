/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../../../AppContext/AppContext";
import { useGoogleLogin } from "@react-oauth/google";
const AuthModal = ({ isOpen, onClose }) => {
  const { isLogin, setIsLogin } = useContext(AppContext);
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

  // Custom Google Login Hook
  const login = useGoogleLogin({});

  return (
    <div className="inset-0 flex items-center justify-center bg-black bg-opacity-100  ">
      <div className="w-[90vw] max-w-md p-6 bg-white rounded-xs shadow-lg ">
        <h2 className="text-2xl font-bold text-center mb-2 mt-3">
          {!isLogin ? "Login" : "Signup"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 mt-6">
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
            className="w-full p-2  border-b-[1px] outline-none mt-3"
          />
          {!isLogin ? (
            <p
              className="mt-2 text-xs text-[#883022] font-Montserrat"
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
              Don&#39;t Have account ?
            </p>
          ) : (
            <p
              className="mt-2 text-xs text-[#883022] font-Montserrat"
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
              Already have account ?
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-[#883022] text-white p-2 rounded "
          >
            {!isLogin ? "Login" : "Signup"}
          </button>
          <div className="google-btn">
            <button
              onClick={login}
              style={{
                // backgroundColor: "#4285F4",
                // color: "#00000",
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
