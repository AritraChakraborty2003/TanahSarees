import SareeTestObj from "../../Models/SareeTest.js";

export const SareeGET = async (req, res) => {
  try {
    const sarees = await SareeTestObj.find();
    res.status(200).json(sarees);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
