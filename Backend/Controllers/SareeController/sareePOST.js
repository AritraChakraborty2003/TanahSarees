import sareeObj from "../../Models/Saree.js";
export const SareePOST = () => {
  return async (req, res) => {
    const {
      sku,
      sname,
      type,
      price,
      material,
      colour,
      discount,
      occasion,
      topSelling,
      rating,
    } = req.body;
    const photo = req.file.filename;
    const newSareeObj = new sareeObj({
      sku,
      sname,
      type,
      price,
      photo,
      material,
      colour,
      discount,
      occasion,
      topSelling,
      rating,
    });
    newSareeObj.save();
    res.status(201).json({ status: "201", message: "Saree Object created..." });
  };
};
