import OrderObj from "../../Models/Orders.js";
export const OrderPATCH = () => {
  return async (req, res) => {
    try {
      const { id } = req.query;
      const { status } = req.body;
      const order = await OrderObj.findOne({ order_id: id });
      console.log(order, id, status);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      order.status = status;
      await order.save();
      res.status(200).json({ message: "Order updated successfully" });
    } catch (error) {
      console.error("Failed to update order status", error);
      res.status(500).json({ message: "Failed to update order status" });
    }
  };
};
