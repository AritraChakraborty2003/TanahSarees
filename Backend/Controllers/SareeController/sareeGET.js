import sareeObj from "../../Models/Saree.js";

export const SareeGET = async (req, res) => {
  try {
    const sarees = await sareeObj.find();
    res.status(200).json(sarees);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
