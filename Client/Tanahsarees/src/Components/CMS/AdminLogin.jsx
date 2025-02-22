import "react-modern-drawer/dist/index.css";
import { useContext } from "react";

import { AppContext } from "../../AppContext/AppContext";

const AdminLogin = () => {
  const { change } = useContext(AppContext);
  return (
    <div
      className="lg:mt-[20vh]  lg:pr-50 lg:pl-50 lg:pt-10 lg:pb-5 w-[100vw] flex justify-center items-center font-Montserrat"
      style={{
        marginTop: `${
          !change
            ? screen.width > 1000
              ? "20%"
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
      <div className="w-[90%] lg:w-[50%]  h-[60vh] mb-5 mt-5 bg-[#F7D9CB] flex justify-center items-center">
        <div className="w-[85%] h-[38vh] lg:h-[50vh] bg-white  rounded-lg shadow-2xl">
          <h2 className="text-2xl font-Montserrat font-bold text-center mt-5">
            Admin Login
          </h2>
          <div className="flex flex-col justify-center items-center gap-10 mt-10">
            <input
              className="border-b-1 w-[90%] border-gray-300 text-gray-600"
              type="text"
              placeholder="Email.."
            />
            <input
              type="text"
              className="border-b-1 border-gray-300 text-gray-600 w-[90%]"
              placeholder="Password.."
            />
          </div>

          <p className="ml-5 mt-7  ">
            <a className="text-gray-500 hover:text-red-800" href="">
              forgot password?
            </a>
          </p>

          <div className="flex justify-center items-center">
            <button className="p-2 mt-[10%] w-[90%] text-white cursor-pointer bg-[#883022] rounded hover:bg-[#883022eb]">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
