/* eslint-disable no-unused-vars */
import "react-modern-drawer/dist/index.css";
import { useContext, useState, useEffect } from "react";

import { AppContext } from "../../AppContext/AppContext";
import { useNavigate } from "react-router-dom";
import { useCheckAuth } from "../../Utils/useCheckAuth";
import UseHTTPRequest from "../../Utils/useHTTPRequest";
import useAuth from "../../Utils/useAuthSystem";
import { toast } from "react-toastify";
const AdminLogin = () => {
  const { change, httpClick, setHttpClick, isAdminLogin, setIsAdminLogin } =
    useContext(AppContext);
  const { login } = useAuth({ type: "admin" });

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const success = await login(email, password);
    if (success) {
      navigate("/dashboard"); // Redirect after login
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div
      className="lg:mt-[20vh]  lg:pr-50 lg:pl-50 lg:pt-5 lg:pb-5 w-[100vw] flex justify-center items-center font-Montserrat"
      style={{
        marginTop: `${
          !change
            ? screen.width > 1000
              ? "15%"
              : ""
            : screen.width > 1000
            ? "12%"
            : ""
        }`, // Adjust based on header height
        zIndex: 10, // Keep content below the header
      }}
    >
      {/* <<<---left div--->>> */}
      {screen.width > 1000 ? (
        <div className="w-[50%]  h-[60vh] bg-[#F7D9CB] flex justify-center items-center">
          <img
            height={300}
            width={300}
            className="lg:ml-6"
            src="logo_new.png"
            alt=""
          />
        </div>
      ) : (
        ""
      )}

      {/* <<<<-----right div----->>>> */}
      <div className="w-[85%] lg:w-[50%]  h-[60vh] mb-5 mt-5 bg-[#F7D9CB] flex justify-center items-center">
        <div className="w-[85%] pb-10  bg-white  rounded-lg shadow-2xl">
          <h2 className="text-2xl font-Montserrat font-bold text-center mt-5">
            Admin Login
          </h2>
          <form id="myForm">
            <div className="flex flex-col justify-center items-center gap-10 mt-10">
              <input
                className="border-b-1 w-[90%] border-gray-300 text-gray-600"
                type="email"
                id="email"
                placeholder="Email.."
              />
              <input
                type="password"
                className="border-b-1 border-gray-300 text-gray-600 w-[90%]"
                id="password"
                placeholder="Password.."
              />
            </div>

            <div className="flex justify-center items-center">
              <button
                className="p-2 mt-[10%] w-[90%] text-white cursor-pointer bg-[#883022] rounded hover:bg-[#883022eb]"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

/*------------- TEST Code -------------------------------
// const navigate = useNavigate();
// const [tigger, setTigger] = useState(false);

// const [res, setRes] = useState("");
// const [tigger_auth, set_tigger_auth] = useState(false);
// const [formData, setFormData] = useState({ email: "", password: "" });

// const data = UseHTTPRequest(tigger, "/admin/login", "POST", formData, "auth");

// const handleLogin = (e) => {
//   e.preventDefault();
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   setFormData({ email, password });
//   setTigger(true); // Ensures UseHTTPRequest is triggered properly
//   setHttpClick(true); //

// useEffect(() => {
//   if (data && data !== res) {
//     setRes(data); // Prevent redundant updates
//   }
// }, [data, res]);

// useEffect(() => {
//   if (res === "Login successful" && !isAdminLogin) {
//     set_tigger_auth(true);
//     setIsAdminLogin(true);
//   }
// }, [isAdminLogin, res, setIsAdminLogin]);

// useEffect(() => {
//   if (isAdminLogin) {
//     navigate("/dashboard");
//   }
}, [isAdminLogin, navigate]);"""*/
