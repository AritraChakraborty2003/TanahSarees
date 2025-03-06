import Razorpay from "razorpay";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const RazorPayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY, // Enter the Key ID generated from the Dashboard
  key_secret: process.env.RAZORPAY_API_SECRET, // Enter the Key Secret generated from the Dashboard
});

export const Checkout = () => {
  return async (req, res) => {
    try {
      //Get the body for items like [{pid:".....",price:"...",qty:"..."}]
      //Calculate the process
      const options = {
        amount: req.body.amount, // Amount in paise, e.g. 1000 = Rs. 10
        currency: "INR",
      };
      const order = await RazorPayInstance.orders.create(options);

      // Create a db entry for orders - {_id,
      //                                  items:[pid1,pid2,pid3....pidn],
      //                                  id:order.id,
      //                                  "status":"created"}

      res.status(200).json({
        message: "success",
        order: order,
      });
    } catch (err) {
      // res.status(500).json({ success: false, error: err.message });
      console.log(err);
    }
  };
};

export const PaymentVerification = () => {
  return async (req, res) => {
    try {
      const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
        req.body;

      const hmac = crypto
        .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

      if (hmac !== razorpay_signature) {
        return res.json({ message: "Failure" });
      }

      // Update DB as needed
      // const transaction = await Transaction.findOneAndUpdate(
      //   { orderId: razorpay_order_id },
      //   { paymentId: razorpay_payment_id, status: "paid" },
      //   { new: true }
      // );

      res.redirect(
        "http://localhost:5173/result?type=success&ref=" + razorpay_order_id
      );
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
};
