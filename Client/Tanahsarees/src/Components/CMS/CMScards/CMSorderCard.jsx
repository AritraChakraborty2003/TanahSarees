import { useState, useEffect } from "react";

const initialOrders = [
  {
    id: "ORD123",
    customer: "John Doe",
    mobile: "+91 9876543210",
    address: "123, MG Road, Bangalore, India",
    total: "$120.50",
    status: "Pending",
    product: {
      name: "SAREE",
      sku: "SAR-001",
      image: "Sarees/saree1.jpg",
      quantity: 2,
    },
  },
  {
    id: "ORD124",
    customer: "Jane Smith",
    mobile: "+91 8765432109",
    address: "456, JP Nagar, Mumbai, India",
    total: "$250.00",
    status: "Completed",
    product: {
      name: "Jeans",
      sku: "JEANS-123",
      image: "https://via.placeholder.com/100",
      quantity: 1,
    },
  },
  {
    id: "ORD125",
    customer: "Alice Johnson",
    mobile: "+91 7654321098",
    address: "789, Sector 62, Noida, India",
    total: "$75.30",
    status: "Shipped",
    product: {
      name: "Jacket",
      sku: "JKT-789",
      image: "https://via.placeholder.com/100",
      quantity: 1,
    },
  },
  {
    id: "ORD126",
    customer: "Bob Brown",
    mobile: "+91 6543210987",
    address: "101, Salt Lake, Kolkata, India",
    total: "$99.99",
    status: "Cancelled",
    product: {
      name: "Sneakers",
      sku: "SNK-456",
      image: "https://via.placeholder.com/100",
      quantity: 1,
    },
  },
];

const CMSordersCard = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Placeholder for future API data fetching
  useEffect(() => {
    // Example API call (uncomment and replace 'YOUR_API_URL' when ready)
    // fetch("YOUR_API_URL")
    //   .then((res) => res.json())
    //   .then((data) => setOrders(data))
    //   .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  const updateOrderStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-200 text-yellow-800";
      case "Shipped":
        return "bg-blue-200 text-blue-800";
      case "Completed":
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
        <div className="hidden lg:block">SKU</div>
        <div>Status</div>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-3 lg:grid-cols-[1.5fr_1fr_0.8fr_0.8fr_0.9fr] items-center border-b pb-2 cursor-pointer p-3"
            onClick={() => setSelectedOrder(order)}
          >
            <div className="hidden lg:block text-sm font-semibold">
              {order.customer}
            </div>
            <div className="text-xs text-gray-500">{order.id}</div>
            <div className="text-sm font-medium">{order.total}</div>
            <div className="hidden lg:block text-sm font-medium">
              {order.product.sku}
            </div>
            <div>
              <select
                value={order.status}
                onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                className={`p-2 rounded-md w-full ${getStatusColor(
                  order.status
                )}`}
                onClick={(e) => e.stopPropagation()}
              >
                <option value="Pending">Pending</option>
                <option value="Shipped">Shipped</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
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
            <div
              className="w-full h-60 bg-contain bg-no-repeat bg-center rounded-lg mb-4"
              style={{ backgroundImage: `url(${selectedOrder.product.image})` }}
            ></div>

            <h3 className="text-lg font-bold border-t-2">
              {selectedOrder.product.name}
            </h3>
            <p className="text-sm">SKU: {selectedOrder.product.sku}</p>
            <p className="text-sm">
              Quantity: {selectedOrder.product.quantity}
            </p>
            <p className="text-sm font-semibold">
              Total: {selectedOrder.total}
            </p>
            <p className="text-sm font-semibold ">
              Name: {selectedOrder.customer}
            </p>
            <p className="text-sm font-semibold">
              Contact: {selectedOrder.mobile}
            </p>
            <p className="text-sm font-semibold">
              Address: {selectedOrder.address}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CMSordersCard;
