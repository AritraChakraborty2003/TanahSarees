import { useState, useEffect } from "react";
import axios from "axios";

// const initialOrders = [
//   {
//     id: "ORD123",
//     customer: "John Doe",
//     mobile: "+91 9876543210",
//     address: "123, MG Road, Bangalore, India",
//     total: "$120.50",
//     status: "Pending",
//     product: {
//       name: "SAREE",
//       sku: "SAR-001",
//       image: "Sarees/saree1.jpg",
//       quantity: 2,
//     },
//   },
//   {
//     id: "ORD124",
//     customer: "Jane Smith",
//     mobile: "+91 8765432109",
//     address: "456, JP Nagar, Mumbai, India",
//     total: "$250.00",
//     status: "Completed",
//     product: {
//       name: "Jeans",
//       sku: "JEANS-123",
//       image: "https://via.placeholder.com/100",
//       quantity: 1,
//     },
//   },
//   {
//     id: "ORD125",
//     customer: "Alice Johnson",
//     mobile: "+91 7654321098",
//     address: "789, Sector 62, Noida, India",
//     total: "$75.30",
//     status: "Shipped",
//     product: {
//       name: "Jacket",
//       sku: "JKT-789",
//       image: "https://via.placeholder.com/100",
//       quantity: 1,
//     },
//   },
//   {
//     id: "ORD126",
//     customer: "Bob Brown",
//     mobile: "+91 6543210987",
//     address: "101, Salt Lake, Kolkata, India",
//     total: "$99.99",
//     status: "Cancelled",
//     product: {
//       name: "Sneakers",
//       sku: "SNK-456",
//       image: "https://via.placeholder.com/100",
//       quantity: 1,
//     },
//   },
// ];

const CMSordersCard = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [user, setUser] = useState({});

  // Placeholder for future API data fetching
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL_TEST}api/v1/orders`)
      .then((res) => {
        setOrders(res.data.reverse());

        // console.log(res.data);
        const id = res.data[0].uinfo;
        axios
          .get(
            `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/users/data?id=${id}`
          )
          .then((res) => {
            setUser(res.data);
            // console.log(res.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [orders]);

  const updateOrderStatus = (id, newStatus) => {
    axios
      .patch(
        `${import.meta.env.VITE_APP_API_URL_TEST}api/v1/orders/data?id=${id}`,
        {
          status: newStatus, // Send new status to backend
        }
      )
      .then(() => {
        // If API request is successful, update the UI state
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.order_id === id ? { ...order, status: newStatus } : order
          )
        );
      })
      .catch((err) => {
        console.error("Failed to update order status", err);
      });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-200 text-yellow-800";
      case "Shipped":
        return "bg-blue-200 text-blue-800";
      case "confirmed":
        return "bg-green-200 text-green-800";
      case "Cancelled":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="w-full lg:w-[75vw] border-1 max-w-full mx-auto light shadow-lg mt-[5vh] lg:mt-[30vh] mb-20 rounded-0 darktxt font-Montserrat lg:rounded-2xl p-4">
      <div className="font-medium text-lg lg:text-3xl text-center border-b-3 mb-4 p-5">
        Recent Orders
      </div>
      {/* Table Header */}
      <div className="grid grid-cols-3 lg:grid-cols-[1.5fr_1fr_0.8fr_0.8fr_0.9fr] text-left bg-gray-100 p-3 rounded-md font-semibold">
        <div className="hidden lg:block">Customer</div>
        <div>Order ID</div>
        <div>Total</div>
        {/* <div className="hidden lg:block">SKU</div> */}
        <div>Status</div>
      </div>
      <div className="space-y-4">
        {orders
          .filter((item) => item.status != "pending")
          .map((order) => (
            <>
              {console.log()}
              <div
                key={order.order_id}
                className="grid grid-cols-3 lg:grid-cols-[1.5fr_1fr_0.8fr_0.8fr_0.9fr] items-center border-b pb-2 cursor-pointer p-3"
                onClick={() => setSelectedOrder(order)}
              >
                <div className="hidden lg:block text-sm font-semibold">
                  {user.name}
                </div>
                <div className="text-xs text-gray-500 w-[80%]">
                  {order.order_id}
                </div>
                <div className="text-sm font-medium">{order.price}</div>
                {/* <div className="hidden lg:block text-sm font-medium">
              {order.product.sku}
            </div> */}
                <div>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateOrderStatus(order.order_id, e.target.value)
                    }
                    className={`p-2 rounded-md w-full ${getStatusColor(
                      order.status
                    )}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option value="Delivered">Delivered</option>
                    <option value="Shipped">Shipped</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Aborted">Aborted</option>
                  </select>
                </div>
              </div>
            </>
          ))}
      </div>

      {/* Order Details Modal */}
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
              className=" fixed top-28 right-4 text-xl"
              onClick={() => setSelectedOrder(null)}
            >
              ✖
            </button>
            {/* <div
              className="w-full h-60 bg-contain bg-no-repeat bg-center rounded-lg mb-4"
              style={{ backgroundImage: `url(${selectedOrder.product.image})` }}
            ></div> */}

            <h3 className="text-lg font-bold border-t-2">
              {selectedOrder.name}
            </h3>

            {selectedOrder.products.map((item) => (
              <>
                <p>
                  sku:{item.pid},&nbsp;quantity:&nbsp;{item.qty}
                </p>
                <p></p>
              </>
            ))}

            <p className="text-sm font-semibold">
              Total: {selectedOrder.price}
            </p>
            <p className="text-sm font-semibold ">Name: {user.name}</p>
            <p className="text-sm font-semibold">Contact: {user.phone}</p>
            <p className="text-sm font-semibold">
              Address: {user.address.replaceAll(":", "  ,  ")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CMSordersCard;
