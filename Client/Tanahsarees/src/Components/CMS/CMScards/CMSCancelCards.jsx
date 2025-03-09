import { useState, useEffect } from "react";
import axios from "axios";

const CMSCancelCards = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [users, setUsers] = useState([]);
  const [orderUserSelected, setOrderUserSelected] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL_TEST}api/v1/orders`)
      .then((res) => {
        const ordersData = res.data.reverse();
        const filteredOrders = ordersData.filter((order) =>
          order.products.some((product) => product.item_status === "Cancelled")
        );
        setOrders(filteredOrders);

        const userIds = [
          ...new Set(filteredOrders.map((order) => order.uinfo)),
        ];

        Promise.all(
          userIds.map((id) =>
            axios.get(
              `${
                import.meta.env.VITE_APP_API_URL_TEST
              }api/v1/users/data?id=${id}`
            )
          )
        )
          .then((responses) => {
            const usersData = responses.map((res) => res.data);
            setUsers(usersData);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full lg:w-[75vw] border-1 max-w-full mx-auto light shadow-lg mt-[5vh] lg:mt-[30vh] mb-20 rounded-0 darktxt font-Montserrat lg:rounded-2xl p-4">
      <div className="font-medium text-lg lg:text-3xl text-center border-b-3 mb-4 p-5">
        Cancelled Orders
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-[1.5fr_1fr_0.8fr_0.8fr_0.9fr] text-left bg-gray-100 p-3 rounded-md font-semibold">
        <div className="hidden lg:block">Customer</div>
        <div>Order ID</div>
        <div>Total</div>
        <div>Status</div>
      </div>
      <div className="space-y-4">
        {orders.map((order) => {
          const orderUser = users.find((u) => u._id === order.uinfo);
          return (
            <div
              key={order.order_id}
              className="grid grid-cols-3 lg:grid-cols-[1.5fr_1fr_0.8fr_0.8fr_0.9fr] items-center border-b pb-2 cursor-pointer p-3"
              onClick={() => {
                setSelectedOrder(order);
                setOrderUserSelected(orderUser);
              }}
            >
              <div className="hidden lg:block text-sm font-semibold">
                {orderUser ? orderUser.name : "Unknown User"}
              </div>
              <div className="text-xs text-gray-500 w-[80%]">
                {order.order_id}
              </div>
              <div className="text-sm font-medium">{order.price}</div>
              <div className="p-2 rounded-md w-full bg-red-200 text-red-800">
                Cancelled
              </div>
            </div>
          );
        })}

        {selectedOrder && (
          <div
            className="fixed z-50 inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center p-0 lg:p-4"
            onClick={() => setSelectedOrder(null)}
          >
            <div
              className="bg-white p-5 lg:p-6 rounded-lg shadow-md shadow-black w-full lg:max-w-[30vw] h-[60vh] max-h-[60vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="fixed top-28 right-4 text-xl"
                onClick={() => setSelectedOrder(null)}
              >
                ✖
              </button>
              <h3 className="text-lg font-bold border-t-2">Order Details</h3>
              {selectedOrder.products.map(
                (item, index) =>
                  item.item_status === "Cancelled" && (
                    <p key={index}>
                      SKU: {item.pid}, Quantity: {item.qty}
                    </p>
                  )
              )}
              <p className="text-sm font-semibold">
                Total: {selectedOrder.price}
              </p>
              <p className="text-sm font-semibold">
                Name: {orderUserSelected?.name}
              </p>
              <p className="text-sm font-semibold">
                Contact: {orderUserSelected?.phone}
              </p>
              <p className="text-sm font-semibold">
                Address: {orderUserSelected?.address?.replaceAll(":", "  ,  ")}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CMSCancelCards;
