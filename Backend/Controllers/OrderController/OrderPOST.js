import OrderObj from "../../Models/Orders.js";

export const OrderPOST = () => {
  return async (req, res) => {
    try {
      const { products, uinfo, price, status, transaction_status, T_no } =
        req.body;

      const order = new OrderObj({
        products,
        uinfo,
        price,
        status,
        transaction_status,
        T_no,
      });

      const savedOrder = await order.save();

      res.status(200).json({
        message: "success",
        order: savedOrder,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };
};
