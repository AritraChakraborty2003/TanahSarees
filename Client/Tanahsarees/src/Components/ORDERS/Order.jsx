import OrderCard from "../CARDS/OrderCard";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext/AppContext";
import axios from "axios";

const Order = () => {
  const { change } = useContext(AppContext);
  const [orders, setOrders] = useState([]);

  const [orderObj, setOrderObj] = useState([]);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await axios.get(
          `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/users/user/orders`,
          { withCredentials: true }
        );

        const responses = await Promise.all(
          orders.data.map((order) =>
            axios.get(
              `${
                import.meta.env.VITE_APP_API_URL_TEST
              }api/v1/orders/data?id=${order}`
            )
          )
        );

        // Extract data from responses
        const data = responses.map((res) => res.data);

        setOrderObj(data);

        // const products = await Promise.all(
        //   orderObj.products.map((saree) =>
        //     axios.get(
        //       `${import.meta.env.VITE_APP_API_URL}api/v1/sarees/data?id=${
        //         saree.pid
        //       }`
        //     )
        //   )
        // );

        console.log("Products:", orderObj);
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
      <div className="flex w-[85vw] lg:w-[50vw]"></div>

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
