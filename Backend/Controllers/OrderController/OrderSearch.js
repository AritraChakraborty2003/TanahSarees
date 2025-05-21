import OrderObj from "../../Models/Orders.js";

export const searchOrders = () => {
  return async (req, res) => {
    try {
      const { uinfo, order_id, T_no } = req.query;

      // Ensure at least one query parameter is provided
      if (!uinfo && !order_id && !T_no) {
        return res.status(400).json({
          message:
            "Please provide at least one search parameter (uinfo, order_id, T_no).",
        });
      }

      // Build query object dynamically based on provided parameters
      const query = {};
      if (uinfo) query.uinfo = uinfo;
      if (order_id) query.order_id = order_id;
      if (T_no) query.T_no = T_no;

      // Find orders with population
      const orders = await OrderObj.find(query)
        .populate("uinfo", "name email phone address") // Populate user info
        .populate("pid", "sname sku price photo") // Populate product info (including price)
        .sort({ createdAt: -1 });

      if (orders.length === 0) {
        return res
          .status(404)
          .json({ message: "No orders found for the given criteria." });
      }

      // Calculate total price if order_id is provided
      let totalPrice = 0;
      if (order_id) {
        totalPrice = orders.reduce(
          (sum, order) => sum + (order.pid?.price * order?.qty || 0),
          0
        );
      }

      console.log(totalPrice);

      res.status(200).json({ success: true, orders, totalPrice });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  };
};
