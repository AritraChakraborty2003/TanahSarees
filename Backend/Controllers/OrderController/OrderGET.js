import OrderObj from "../../Models/Orders.js";

export const OrderGET = async (req, res) => {
  try {
    const orders = await OrderObj.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
