import SareeTestObj from "../../Models/SareeTest.js";

export const SareePOST = () => {
  return async (req, res) => {
    try {
      console.log(req.body);
      const { name, price, description, review, customer } = req.body;
      const photo = req.file.filename;
      const newSaree = new SareeTestObj({
        name,
        price,
        description,
        photo,
        review,
        customer,
      });
      newSaree.save();
      res.status(201).json(newSaree);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};
