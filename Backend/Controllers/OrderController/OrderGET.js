import OrderObj from "../../Models/Orders.js";

export const OrderGETDetails = async (req, res) => {
  try {
    const orders = await OrderObj.find()
      .populate("uinfo", "name email phone address")
      .populate("pid");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const OrderGET = async (req, res) => {
  try {
    const orders = await OrderObj.find();

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
