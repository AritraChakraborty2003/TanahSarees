import OrderCard from "../CARDS/OrderCard";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext/AppContext";
import axios from "axios";

const Order = () => {
  const { change } = useContext(AppContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8040/api/v1/orders");
        console.log("Fetched Orders:", response.data);

        if (Array.isArray(response.data)) {
          // Flatten orders, attaching order_id and status to each product
          const allProducts = response.data.flatMap((order) =>
            (order.products || []).map((product) => ({
              ...product,
              order_id: order.order_id, // Attach order_id to each product
              status: order.status, // Attach order status
            }))
          );

          setOrders(allProducts);
        } else {
          console.error("Unexpected data format:", response.data);
          setOrders([]);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        setOrders([]);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center mt-10 pb-10"
      style={{
        marginTop: `${
          !change
            ? screen.width > 1000
              ? "25%"
              : ""
            : screen.width > 1000
            ? "12%"
            : ""
        }`,
        zIndex: 10,
      }}
    >
      {/* Search Bar */}
      <div className="flex w-[85vw] lg:w-[50vw]">
        <input
          className="w-[75%] p-[1%] border-b-1"
          type="text"
          placeholder="Enter Order Name..."
        />
        <button className="w-[23%] p-2 lg:p-[0.5%] bg-[#F7D9CB] ml-4 hover:bg-[#f6c6b0]">
          Search
        </button>
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
