import axios from "axios";
const Testpay1 = () => {
  const handlepayment = async () => {
    const {
      data: { order },
    } = await axios.post("http://localhost:8040/api/v1/checkout", {
      amount: 1000,
    });
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
    <div className="bg-blue-500 lighttxt p-2">
      <button onClick={handlepayment}>pay now </button>
    </div>
  );
};

export default Testpay1;
