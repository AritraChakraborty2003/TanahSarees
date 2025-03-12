import salesObj from "../../Models/Sale.js";

export const salesGET = async (req, res) => {
  try {
    const sales = await salesObj.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
