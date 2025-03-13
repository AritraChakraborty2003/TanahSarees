/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import OrderCard from "../CARDS/OrderCard";
import { AppContext } from "../../AppContext/AppContext";
import axios from "axios";

const mockOrders = [
  {
    pid: "123",
    name: "Saree A",
    price: 2000,
    status: "Confirmed",
    image: "/images/saree1.jpg",
    qty: 3,
  },
  {
    pid: "456",
    name: "Saree B",
    price: 1500,
    status: "Cancelled",
    image: "/images/saree2.jpg",
    qty: 2,
  },
];

const Order = () => {
  const { change } = useContext(AppContext);
  const [orders, setOrders] = useState(mockOrders); // Mock data directly in state for now

  // Log to ensure data is correct
  console.log("Orders Data:", orders);

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
        {orders.length > 0 ? (
          <OrderCard data={orders} />
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Order;
