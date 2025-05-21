import salesObj from "../../Models/Sale.js";

export const salesPOST = () => {
  return async (req, res) => {
    try {
      const { sale_name, sale_time } = req.body;

      const sale = new salesObj({ sale_name, sale_time });
      await sale.save();

      res.status(201).json({
        message: "success",
        sale: sale,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};
