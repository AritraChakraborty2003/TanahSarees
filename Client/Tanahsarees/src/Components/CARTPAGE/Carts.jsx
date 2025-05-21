/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import CartDisplay from "../CARDS/CartDisplay";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import UseHTTPRequest from "../../Utils/useHTTPRequest";
import axios from "axios";
import { useEffect } from "react";

const Carts = () => {
  const { change } = useContext(AppContext);
  const [chosen, setChosen] = useState([]); // Move state to parent
  const {
    setChange,
    contentCart,
    setContentCart,
    isLoggedIn,
    loginOpen,
    setLoginOpen,
    setIsLoggedIn,
    setIsAdminLogin,
    cartDrawerTigger,
    setCartDrawerTigger,
    cartTotal,
    setCartTotal,
    ReloadDrawer,
    setReloadDrawer,
  } = useContext(AppContext);

  const [tiggerCart, settiggerCart] = useState(false);
  const [cartdata, setCartData] = useState([]);
  const [data, setData] = useState([]);

  const sareeData = UseHTTPRequest(tiggerCart, "/sarees", "GET", "", "");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/cart`,
          { withCredentials: true }
        );
        const cartItems = response.data;
        setCartData(cartItems);

        // Ensure sareeData is available before filtering
        if (!sareeData || sareeData.length === 0) return;

        const updatedFilteredData = sareeData
          .filter((saree) =>
            cartItems.some((cartItem) => cartItem.pid === saree._id)
          )
          .map((saree) => ({
            ...saree,
            qty:
              cartItems.find((cartItem) => cartItem.pid === saree._id)?.qty ||
              1,
          }));

        const calculatedTotal = updatedFilteredData.reduce(
          (acc, item) => acc + item.price * item.qty,
          0
        );
        setCartTotal(calculatedTotal);

        setData(updatedFilteredData);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [sareeData, tiggerCart, cartDrawerTigger, ReloadDrawer]); // Updated dependency array

  return (
    <div
      className="relative mt-5 pb-10 h-[100%] flex flex-col items-center"
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
      <p className="text-center font-Montserrat darktxt font-extralight lg:mt-5 text-xs lg:text-lg">
        Home / Cart
      </p>
      <p className="text-center font-light text-gray-600 font-Poppins    overflow-hidden text-xs lg:text-[1.75vmin] mt-2 lg:mt-5 ">
        ✅ &nbsp;Please select the items you want to purchase
      </p>

      <div className="flex flex-wrap gap-x-10 gap-y-8 w-[100vw] justify-center items-center mt-10">
        {data.map((item) => (
          <CartDisplay
            key={item._id}
            data={item}
            chosen={chosen}
            setChosen={setChosen} // Pass state and updater
          />
        ))}
      </div>

      {/* Checkout Section - Show only if any item is selected */}
      {chosen.length > 0 && (
        <div className="sticky bottom-0 bg-white  p-2 flex justify-evenly lg:mt-20 mt-10  w-[100%]">
          <div className="flex flex-col">
            <p className=" text-md  lg:text-lg font-Montserrat font-medium">
              Total: ₹&nbsp;
              {chosen.reduce((acc, id) => {
                const item = data.find((i) => i._id === id);
                return acc + (item ? item.price : 0);
              }, 0)}
            </p>
            <p className="text-xs">Delivery Charges + GST:</p>
          </div>
          <button className=" bg-blue-500  text-white p-3 lg:p-4 hover:bg-green-600 rounded cursor-pointer">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Carts;
