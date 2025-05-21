/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CMSordersCard = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}api/v1/orders/details`
        );

        setOrders(
          res.data.filter(
            (item) =>
              item.item_status === "cancelled" ||
              item.item_status === "resolved"
          )
        );
      } catch (err) {
        console.error("Failed to fetch orders", err);
      }
    };

    fetchOrder();
  }, []);

  const handleStatusUpdate = async (order_id, pid, newStatus) => {
    try {
      const res = await axios.patch(
        `${
          import.meta.env.VITE_APP_API_URL_TEST
        }api/v1/orders/order/data?id=${order_id}`,
        {
          item_status: newStatus,
          pid,
        }
      );

      if (res.data.message === "success") {
        toast.success("Order status updated successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 800); // Refresh to show updated status
      } else {
        toast.error("Something went wrong...");
      }
    } catch (err) {
      console.error("Failed to update order status", err);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* Search Bar */}
        {/* <div className="flex w-[85vw]  lg:w-[50vw] border-1 mt-10 lg:mt-70  border-gray-200">
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
        </div> */}

        <div className=" lg:mt-70 w-[95vw] lg:w-[75vw] border-1  mx-auto shadow-lg mt-10   mb-20 rounded-2xl p-4">
          <div className="font-medium text-lg lg:text-3xl text-center border-b-3 mb-4 p-5">
            Cancelled Orders
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-[2.4fr_2.4fr_0.8fr] lg:grid-cols-[1fr_1fr_1fr] text-left bg-gray-100 p-3 rounded-md font-semibold">
            <div>Order ID</div>
            <div>SKU</div>
            <div>Price</div>
          </div>

          <div className="space-y-4">
            {orders.length > 0 &&
              orders.map((order) => {
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
                    <div className="text-sm mr-3">{order.pid.sku || "N/A"}</div>
                    <div className="text-sm font-medium">{order.pid.price}</div>
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

                  <p key={selectedOrder.pid.sku}>
                    SKU: {selectedOrder.pid.sku}
                  </p>
                  <p> Quantity: {selectedOrder.qty}</p>
                  <p key={selectedOrder.pid.order_id}>
                    OrderId: {selectedOrder.order_id}
                  </p>

                  <p className="text-sm font-semibold">
                    Total: ₹{selectedOrder.pid.price}
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
                      value={selectedOrder.item_status}
                      onChange={(e) =>
                        handleStatusUpdate(
                          selectedOrder.order_id,
                          selectedOrder.pid._id,
                          e.target.value
                        )
                      }
                      className="p-2 rounded-md w-full border"
                    >
                      <option value="cancelled">Cancelled</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </div>

                  <p className="text-sm font-semibold mt-4">
                    Name: {selectedOrder.uinfo.name}
                  </p>
                  <p className="text-sm font-semibold">
                    Contact:{selectedOrder.uinfo.phone}
                  </p>
                  <p className="text-sm font-semibold">
                    Address: {selectedOrder.uinfo.address.replaceAll(":", ",")}
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
