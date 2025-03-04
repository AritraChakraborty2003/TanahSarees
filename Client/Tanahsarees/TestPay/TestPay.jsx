import { useState, useEffect } from "react";
import axios from "axios";

export const TestPay = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.post("http://localhost:8040/api/v1/checkout", {
          amount: 500000,
        });
        setOrder(res.data.order); // ✅ Extract order correctly
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };
    fetchOrder();
  }, []);
  console.log(`${import.meta.env.VITE_RAZORPAY_API_KEY}`);
  const handlePayment = () => {
    if (!order) return; // ✅ Ensure order is available before proceeding

    var options = {
      key: `${import.meta.env.VITE_RAZORPAY_API_KEY}`,
      amount: order.amount,
      currency: "INR",
      name: "Acme Corp",
      callback_url: "http://localhost:8040/api/v1/checkout/verification",
      description: "Test Transaction",
      order_id: order.id,
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <button
        onClick={handlePayment}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Pay Now
      </button>
    </div>
  );
};
