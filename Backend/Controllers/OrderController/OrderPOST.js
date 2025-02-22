import OrderObj from "../../Models/Orders.js";

export const OrderPOST = () => {
  return async (req, res) => {
    try {
      const {
        email,
        phone,
        item_name,
        item_quantity,
        price,
        additional_number,
        address,
        images,
      } = req.body;
      const newOrder = new OrderObj({
        email,
        phone,
        item_name,
        item_quantity,
        price,
        additional_number,
        address,
        images,
      });
      await newOrder.save();
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};
