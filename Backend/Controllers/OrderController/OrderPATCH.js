import OrderObj from "../../Models/Orders.js";
export const OrderPATCH = () => {
  return async (req, res) => {
    try {
      const order_id = req.query.id; // Extract order_id and pid._id from request parameters
      const { item_status, pid } = req.body;

      console.log(order_id, item_status, pid);

      // Validate item_status
      const validStatuses = [
        "confirmed",
        "packed",
        "shipped",
        "delivered",
        "cancelled",
        "resolved",
        "failed",
        "pending",
      ];
      if (!validStatuses.includes(item_status)) {
        return res.status(400).json({ message: "Invalid item status" });
      }

      const order = await OrderObj.findOne({ order_id, pid }).populate("pid");

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      // Now that `order.pid` is populated, update `item_status`
      order.item_status = item_status;
      await order.save();

      res.status(200).json({
        message: "success",
        order,
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
};
