import SareeTestObj from "../../Models/SareeTest.js";

export const SareePOST = () => {
  return async (req, res) => {
    try {
      console.log(req.body);
      const {
        sname,
        type,
        price,
        material,
        color,
        discount,
        occasion,
        topSelling,
      } = req.body;

      const photo = req.file.filename;
      const newSaree = new SareeTestObj({
        sname,
        type,
        price,
        photo,
        material,
        color,
        discount,
        occasion,
        topSelling,
      });
      newSaree.save();
      res.status(201).json(newSaree);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};
