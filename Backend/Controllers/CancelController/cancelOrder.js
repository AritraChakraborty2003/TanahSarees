import UserObj from "../../Models/User.js";
import OrderObj from "../../Models/Orders.js";
export const cancelOrder = () => {
  return async (req, res) => {
    try {
      const { order_id, pid } = req.body;
      const token = req.cookies.ecom_token;
      if (!token) {
        return res
          .status(401)
          .json({ message: "Not authorized", status: "Not Login" });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await UserObj.findById(decoded.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      const order = await OrderObj.findOne({ order_id });

      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }

      // Find the product inside the order
      const product = order.products.find((p) => p.pid === pid);

      if (!product) {
        return res
          .status(404)
          .json({ error: "Product not found in this order" });
      }

      // Update the item_status
      product.item_status = "Cancelled";

      await order.save();

      const updatedUser = await UserObj.findByIdAndUpdate(
        decoded.id,
        { $push: { order: order_id, product: pid } }, // Add new cancel data to array
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      // Save the updated order

      res.json({ message: "sucess", order });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };
};
