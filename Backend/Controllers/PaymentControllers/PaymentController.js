import Razorpay from "razorpay";
import dotenv from "dotenv";
import UserObj from "../../Models/User.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import OrderObj from "../../Models/Orders.js";

dotenv.config();

const RazorPayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY, // Enter the Key ID generated from the Dashboard
  key_secret: process.env.RAZORPAY_API_SECRET, // Enter the Key Secret generated from the Dashboard
});

export const Checkout = () => {
  return async (req, res) => {
    try {
      const token = req.cookies.ecom_token;
      if (!token) {
        return res
          .status(401)
          .json({ message: "Not authorized", status: "Not Logged In" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await UserObj.findById(decoded.id);
      if (!user) return res.status(404).json({ message: "User not found" });

      if (!user.cart || user.cart.length === 0) {
        return res.status(400).json({ message: "Cart is empty" });
      }

      // Create a Razorpay order
      const options = {
        amount: req.body.amount, // Amount in paise
        currency: "INR",
      };
      const paymentOrder = await RazorPayInstance.orders.create(options);

      // Create separate order entries for each cart item
      const orderPromises = user.cart.map((cartItem) =>
        new OrderObj({
          order_id: paymentOrder.id,
          pid: cartItem.pid, // Store product reference
          uinfo: decoded.id, // Associate with the user
          qty: cartItem.qty, // Store quantity
          item_status: "pending",
          T_no: "", // Empty transaction number initially
        }).save()
      );

      // Wait for all orders to be saved
      await Promise.all(orderPromises);

      res.status(200).json({
        message: "Success",
        order: paymentOrder,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  };
};

export const PaymentVerification = () => {
  return async (req, res) => {
    try {
      const { id } = req.query; // User ID from query params
      const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
        req.body;

      // ✅ Generate HMAC to verify payment signature
      const hmac = crypto
        .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

      if (hmac !== razorpay_signature) {
        // ❌ Payment verification failed -> Update all orders for this order_id
        await OrderObj.updateMany(
          { order_id: razorpay_order_id },
          {
            item_status: "failed",
            T_no: razorpay_payment_id, // ❌ Store transaction number even if failed
          }
        );

        return res.json({ success: false, message: "Invalid Signature" });
      }

      // ✅ Payment verified -> Update all matching orders
      await OrderObj.updateMany(
        { order_id: razorpay_order_id },
        {
          item_status: "confirmed",
          T_no: razorpay_payment_id, // ✅ Store transaction number
        }
      );

      // ✅ Update user's order history
      await UserObj.findByIdAndUpdate(
        id,
        { $push: { orders: razorpay_order_id } },
        { new: true, runValidators: true }
      );

      // ✅ Redirect user after successful payment
      res.redirect(
        `${process.env.CLIENT_URL}result?type=success&ref=${razorpay_order_id}`
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  };
};
