import sareeObj from "../../Models/Saree.js";
import mongoose from "mongoose";
export const SareeGET = async (req, res) => {
  try {
    const sarees = await sareeObj.find();
    res.status(200).json(sarees);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const SareeGETbyID = async (req, res) => {
  try {
    const { id } = req.query;
    console.log("Received ID:", id);

    // Convert ID to ObjectId only if _id is an ObjectId in DB
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Saree ID format" });
    }

    const saree = await sareeObj.findById(new mongoose.Types.ObjectId(id));

    if (!saree) {
      return res.status(404).json({ message: "Saree not found" });
    }

    res.status(200).json(saree);
  } catch (error) {
    console.error("Error fetching saree:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
