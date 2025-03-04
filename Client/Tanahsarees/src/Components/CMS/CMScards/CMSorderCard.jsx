import { useState } from "react";

const initialOrders = [
  {
    id: "ORD123",
    customer: "John Doe",
    total: "$120.50",
    status: "Pending",
    product: {
      name: "SAREE",
      image: "Sarees/saree1.jpg",
      quantity: 2,
    },
  },
  {
    id: "ORD124",
    customer: "Jane Smith",
    total: "$250.00",
    status: "Completed",
    product: {
      name: "Jeans",
      image: "https://via.placeholder.com/100",
      quantity: 1,
    },
  },
  {
    id: "ORD125",
    customer: "Alice Johnson",
    total: "$75.30",
    status: "Shipped",
    product: {
      name: "Jacket",
      image: "https://via.placeholder.com/100",
      quantity: 1,
    },
  },
  {
    id: "ORD126",
    customer: "Bob Brown",
    total: "$99.99",
    status: "Cancelled",
    product: {
      name: "Sneakers",
      image: "https://via.placeholder.com/100",
      quantity: 1,
    },
  },
];

const statusColors = {
  Pending: "bg-yellow-500",
  Completed: "bg-green-500",
  Shipped: "bg-blue-500",
  Cancelled: "bg-red-500",
};

const CMSordersCard = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const toggleStatus = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === id) {
          const newStatus =
            order.status === "Pending"
              ? "Shipped"
              : order.status === "Shipped"
              ? "Completed"
              : "Pending";
          return { ...order, status: newStatus };
        }
        return order;
      })
    );
  };

  const cancelOrder = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Cancelled" } : order
      )
    );
  };

  return (
    <div className="w-full lg:w-[75vw] border-1 max-w-full mx-auto light shadow-lg mt-[5vh] lg:mt-[30vh] mb-20 rounded-0 darktxt font-Montserrat lg:rounded-2xl p-4">
      <div className="font-medium text-lg lg:text-3xl  text-center border-b-3 mb-4 p-5">
        Recent Orders
      </div>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex justify-between items-center border-b pb-2 cursor-pointer"
            onClick={() => setSelectedOrder(order)}
          >
            <div>
              <p className="text-sm font-semibold">{order.customer}</p>
              <p className="text-xs text-gray-500">{order.id}</p>
            </div>
            <div className="text-sm font-medium">{order.total}</div>
            <button
              className={`px-2 py-1 text-xs text-white ${
                statusColors[order.status]
              } rounded-md hover:bg-blue-500`}
              onClick={(e) => {
                e.stopPropagation();
                toggleStatus(order.id);
              }}
            >
              {order.status}
            </button>
            <button
              className="text-red-500 ml-2"
              onClick={(e) => {
                e.stopPropagation();
                cancelOrder(order.id);
              }}
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      {selectedOrder && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setSelectedOrder(null)}
            >
              ✖
            </button>
            <img
              src={selectedOrder.product.image}
              alt={selectedOrder.product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold">{selectedOrder.product.name}</h3>
            <p className="text-sm">
              Quantity: {selectedOrder.product.quantity}
            </p>
            <p className="text-sm font-semibold">
              Total: {selectedOrder.total}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CMSordersCard;
