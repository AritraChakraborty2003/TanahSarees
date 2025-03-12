import OrderObj from "../../Models/Orders.js";
import mongoose from "mongoose";
export const OrderGET = async (req, res) => {
  try {
    const orders = await OrderObj.find()
      .populate("uinfo", "name email phone address")
      .populate("pid");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Ensure correct import

export const OrderGETbyID = async (req, res) => {
  try {
    const { id } = req.query;
    console.log("Received ID:", id);

    const order = await OrderObj.findOne({ order_id: id });

    if (!order) {
      return res.status(404).json({ message: "Saree not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error fetching saree:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
