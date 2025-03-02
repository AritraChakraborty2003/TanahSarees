/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { AppContext } from "../../../../AppContext/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { checkInput } from "../../../../Utils/checkInput";
const AuthModal = ({ isOpen }) => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin, Loginlargescreen, setLoginlargescreen } =
    useContext(AppContext);

  // ✅ Fixed: Separate email, phone, and password in state
  const [formData, setFormData] = useState({
    info: "",
    name: "",
    password: "",
  });

  console.log(`${import.meta.env.VITE_APP_API_URL_TEST}api/v1/auth/login`);
  // ✅ Fixed: Correct state updates for each input field
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isLogin) {
        const type = checkInput(formData.info);
        let dataObj = {};
        if (type === "email") {
          dataObj = {
            name: formData.name,
            email: formData.info,
            password: formData.password,
          };
        } else if (type === "phone") {
          dataObj = {
            name: formData.name,
            phone: formData.info,
            password: formData.password,
          };
        } else {
          toast.error("Invalid email or phone number");
          return;
        }

        const res = await axios.post(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/auth/signup`,
          dataObj
        );
        if (res.data.status === "success") {
          toast.success("Signup successful!");
          navigate("/");
          setLoginlargescreen(!Loginlargescreen);
        } else {
          toast.error("Signup failed. Please try again.");
        }
      } else {
        const type = checkInput(formData.info);
        let dataObj = {};
        if (type === "email") {
          dataObj = {
            email: formData.info,
            password: formData.password,
          };
        } else if (type === "phone") {
          dataObj = {
            phone: formData.info,
            password: formData.password,
          };
        } else {
          toast.error("Invalid email or phone number");
          return;
        }

        const res = await axios.post(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/auth/login`,
          dataObj,
          { withCredentials: true }
        );
        if (res.data.status === "success") {
          const res1 = await axios.get(
            `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/auth/profile`,
            { withCredentials: true }
          );

          console.log(res1.data);

          toast.success("Login successful!");

          if (screen.width > 1000) {
            setLoginlargescreen(!Loginlargescreen);
          }
          if (window.location.pathname === "/") {
            setTimeout(() => {
              window.location.reload();
            }, 800);
          } else {
            setTimeout(() => {
              navigate("/");
            }, 800);
          }
        } else {
          toast.error("Login failed. Please try again.");
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (!isOpen) return null;

  const handleLogin = async (codeResponse) => {
    console.log("Authorization Code:", codeResponse.code); // ✅ Debugging
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/auth/google`,
        { code: codeResponse.code },
        { withCredentials: true } // ✅ Required to send cookies
      );
      const res1 = await axios.get(
        `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/auth/profile`,
        { withCredentials: true }
      );

      console.log(res1.data);

      toast.success("Login successful!");

      if (screen.width > 1000) {
        setLoginlargescreen(!Loginlargescreen);
      }
      if (window.location.pathname === "/") {
        setTimeout(() => {
          window.location.reload();
        }, 800);
      } else {
        setTimeout(() => {
          navigate("/");
        }, 800);
      }
    } catch (error) {
      toast.error("Google Login Error:", error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: handleLogin,
    onError: () => console.log("Google Login Failed"),
    flow: "auth-code", // ✅ Correct flow for authorization code
  });

  return (
    <div className="inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[90vw] max-w-md p-6 bg-white rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-2 mt-3">
          {isLogin ? "Login" : "Signup"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 mt-6">
          {/* ✅ Fixed: Separate state field for email */}
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Enter name..."
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 text-md border-b border-gray-300 outline-none"
            />
          )}
          {/* ✅ Show phone number input only for Signup */}
          <input
            type="text"
            name="info"
            placeholder="Enter email/phone..."
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 text-md border-b border-gray-300 outline-none"
          />

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
                className="mt-2 text-xs darktxt cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Don&apos;t have an account?
              </p>
              <p
                className="mt-2 text-xs darktxt cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Forgot Password?
              </p>
            </div>
          ) : (
            <p
              className="mt-2 text-xs darktxt cursor-pointer"
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
