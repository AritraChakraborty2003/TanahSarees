/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CMSordersCard = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // axios
    //   .get(`${import.meta.env.VITE_APP_API_URL_TEST}api/v1/orders`)
    //   .then((res) => {
    //     const validOrders = res.data
    //       .reverse()
    //       .filter((order) =>
    //         order.products.some(
    //           (product) => product.item_status !== "Cancelled"
    //         )
    //       );
    //     setOrders(validOrders);
    //     const userIds = [...new Set(validOrders.map((order) => order.uinfo))];
    //     Promise.all(
    //       userIds.map((id) =>
    //         axios.get(
    //           `${
    //             import.meta.env.VITE_APP_API_URL_TEST
    //           }api/v1/users/data?id=${id}`
    //         )
    //       )
    //     )
    //       .then((responses) => {
    //         const usersData = responses.map((res) => res.data);
    //         setUsers(usersData);
    //       })
    //       .catch((err) => console.log(err));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  const handleStatusUpdate = (id, newStatus) => {
    // axios
    //   .patch(
    //     `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/orders/data?id=${id}`,
    //     { status: newStatus }
    //   )
    //   .then(() => {
    //     setSelectedOrder(null);
    //     toast.success("Order Updated!");
    //     // Refetch the updated orders list
    //     axios
    //       .get(`${import.meta.env.VITE_APP_API_URL_TEST}api/v1/orders`)
    //       .then((res) => {
    //         const ordersData = res.data.reverse();
    //         const validOrders = ordersData.filter((order) =>
    //           order.products.some(
    //             (product) => product.item_status !== "Cancelled"
    //           )
    //         );
    //         setOrders(validOrders);
    //       })
    //       .catch((err) => console.error("Failed to fetch updated orders", err));
    //   })
    //   .catch((err) => {
    //     console.error("Failed to update order status", err);
    //   });
  };

  const handleSearch = () => {};
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* Search Bar */}
        <div className="flex w-[85vw]  lg:w-[50vw] border-1 mt-10 lg:mt-70  border-gray-200">
          <input
            type="text"
            className="bg-[#ff95000d] w-[65vw]  lg:w-[40vw] h-10  p-3 "
            placeholder="Search by Order ID"
          />
          <button
            className=" w-[25vw] lg:w-[10vw] bg-[#262424] lighttxt cursor-pointer hover:bg-[#171616dc]"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="w-[95vw] lg:w-[75vw] border-1  mx-auto shadow-lg mt-10   mb-20 rounded-2xl p-4">
          <div className="font-medium text-lg lg:text-3xl text-center border-b-3 mb-4 p-5">
            Recent Orders
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-[2.4fr_2.4fr_0.8fr] lg:grid-cols-[1fr_1fr_1fr] text-left bg-gray-100 p-3 rounded-md font-semibold">
            <div>Order ID</div>
            <div>SKU</div>
            <div>Price</div>
          </div>

          <div className="space-y-4">
            {orders.map((order) => {
              // const orderUser = users.find((u) => u._id === order.uinfo);

              return (
                <div
                  key={order.order_id}
                  className="grid grid-cols-[2.4fr_2.4fr_0.8fr]  lg:grid-cols-[1fr_1fr_1fr] items-center border-b justify-center p-3 cursor-pointer "
                  onClick={() => setSelectedOrder(order)}
                >
                  <div className="text-xs text-gray-500 mr-3">
                    {order.order_id}
                  </div>
                  <div className="text-sm mr-3">
                    {order.products[0]?.pid || "N/A"}
                  </div>
                  <div className="text-sm font-medium">{order.price}</div>
                </div>
              );
            })}

            {/* Modal */}
            {selectedOrder && (
              <div
                className="fixed z-50 inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center p-4"
                onClick={() => setSelectedOrder(null)}
              >
                <div
                  className="bg-white p-5 rounded-lg shadow-md w-full lg:max-w-[30vw] h-[60vh] max-h-[60vh] relative overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute -top-0  right-3 text-xl"
                    onClick={() => setSelectedOrder(null)}
                  >
                    ✖
                  </button>
                  <h3 className="text-lg font-bold border-b-2 pb-2">
                    {selectedOrder.name}
                  </h3>

                  {selectedOrder.products.map((item) => (
                    <>
                      <p key={item.pid}>SKU: {item.pid}</p>
                      <p> Quantity: {item.qty}</p>
                      <p key={item.pid}>OrderId: {selectedOrder.order_id}</p>
                    </>
                  ))}

                  <p className="text-sm font-semibold">
                    Total: {selectedOrder.price}
                  </p>

                  <div className="mt-4">
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium"
                    >
                      Update Status:
                    </label>
                    <select
                      id="status"
                      value={selectedOrder.status}
                      onChange={(e) =>
                        handleStatusUpdate(
                          selectedOrder.order_id,
                          e.target.value
                        )
                      }
                      className="p-2 rounded-md w-full border"
                    >
                      <option value="Delivered">Delivered</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Cancelled">Cancelled</option>
                      <option value="Aborted">Aborted</option>
                    </select>
                  </div>

                  <p className="text-sm font-semibold mt-4">
                    Name:{" "}
                    {users.find((u) => u._id === selectedOrder.uinfo)?.name}
                  </p>
                  <p className="text-sm font-semibold">
                    Contact:{" "}
                    {users.find((u) => u._id === selectedOrder.uinfo)?.phone}
                  </p>
                  <p className="text-sm font-semibold">
                    Address:{" "}
                    {users
                      .find((u) => u._id === selectedOrder.uinfo)
                      ?.address.replaceAll(":", " , ")}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CMSordersCard;
