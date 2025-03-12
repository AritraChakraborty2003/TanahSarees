import OrderObj from "../../Models/Orders.js";
export const OrderPATCH = () => {
  return async (req, res) => {
    try {
      const { order_id, pid } = req.params; // Extract order_id and pid._id from request parameters
      const { item_status } = req.body;

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

      // Update the `item_status` for the specific `pid._id` within the given `order_id`
      const updatedOrder = await OrderObj.findOneAndUpdate(
        { order_id, "pid._id": pid }, // Filtering by `order_id` and `pid._id`
        { $set: { item_status } }, // Updating `item_status`
        { new: true, runValidators: true }
      );

      if (!updatedOrder) {
        return res.status(404).json({ message: "Order or Product not found" });
      }

      res.status(200).json({
        message: "Item status updated successfully",
        updatedOrder,
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
};
