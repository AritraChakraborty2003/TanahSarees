import { useContext, useEffect, useState } from "react";
import OrderCard from "../CARDS/OrderCard";
import { AppContext } from "../../AppContext/AppContext";
import axios from "axios";

const Order = () => {
  const { change } = useContext(AppContext);
  const [orders, setOrders] = useState(null); // Mock data directly in state for now

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/users/user/orders`,
          { withCredentials: true }
        );
        setOrders(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrder();
  }, []);
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center mt-10 pb-10"
      style={{
        marginTop: `${
          !change
            ? screen.width > 1000
              ? "23%"
              : ""
            : screen.width > 1000
            ? "12%"
            : ""
        }`,
        zIndex: 10,
      }}
    >
      <div className=" font-Montserrat font-medium text-3xl overflow-hidden">
        Your Orders
      </div>
      {/* Order Cards Carousel */}
      <div className="mt-10">
        {orders ? <OrderCard data={orders} /> : <p>No orders found.</p>}
      </div>
    </div>
  );
};

export default Order;
