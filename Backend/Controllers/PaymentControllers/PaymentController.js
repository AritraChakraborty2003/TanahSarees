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
      console.log(token);
      if (!token) {
        return res
          .status(401)
          .json({ message: "Not authorized", status: "Not Login" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await UserObj.findById(decoded.id);
      if (!user) return res.status(404).json({ message: "User not found" });

      const options = {
        amount: req.body.amount, // Amount in paise, e.g. 1000 = Rs. 10
        currency: "INR",
      };
      const order = await RazorPayInstance.orders.create(options);

      user.cart.item_status = "ordered";

      const OrderObjNew = new OrderObj({
        order_id: order.id,
        products: user.cart,
        uinfo: decoded.id,
        price: req.body.amount / 100,
        status: "pending",
        transaction_status: "pending",
        T_no: "", // Transaction number if available
      });

      await OrderObjNew.save();

      res.status(200).json({
        message: "success",
        order: order,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };
};

export const PaymentVerification = () => {
  return async (req, res) => {
    try {
      const { id } = req.query;
      const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
        req.body;

      const hmac = crypto
        .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

      if (hmac !== razorpay_signature) {
        await OrderObj.findOneAndUpdate(
          {
            order_id: razorpay_order_id,
          },
          {
            status: "failed",
            transaction_status: "failed",
            T_no: razorpay_payment_id,
          },
          {
            new: true,
            runValidators: true,
          }
        );

        res.json({ success: false, message: "Invalid Signature" });
      }

      await OrderObj.findOneAndUpdate(
        {
          order_id: razorpay_order_id,
        },
        {
          status: "confirmed",
          transaction_status: "confirmed",
          T_no: razorpay_payment_id,
        },
        {
          new: true,
          runValidators: true,
        }
      );

      await OrderObj.findOneAndUpdate(
        { order_id: razorpay_order_id },
        { $set: { "products.$[].item_status": "confirmed" } }, // Update all product items
        { new: true, runValidators: true }
      );

      await UserObj.findByIdAndUpdate(
        id,
        { $push: { orders: razorpay_order_id } }, // Push a single value to the array
        { new: true, runValidators: true }
      );

      res.redirect(
        "https://tanahsarees.com/result?type=success&ref=" + razorpay_order_id
      );
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
};
