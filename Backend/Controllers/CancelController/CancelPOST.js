import CancelObj from "../../Models/Cancel.js";

export const CancelPOST = () => {
  return async (req, res) => {
    try {
      console.log(req.body);
      const {
        order_id,
        item_name,
        item_price,
        uname,
        info,
        additional_number,
      } = req.body;

      const newCancel = new CancelObj({
        order_id,
        item_name,
        item_price,
        uname,
        info,
        additional_number,
      });
      newCancel.save();

      res.status(201).json(newCancel);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};
