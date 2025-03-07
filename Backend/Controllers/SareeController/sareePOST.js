import sareeObj from "../../Models/Saree.js";
export const SareePOST = () => {
  return async (req, res) => {
    try {
      console.log("Hi");
      console.log(req.body);
      const {
        sku,
        sname,
        type,
        price,
        material,
        colour,
        discount,
        occasion,
        photo,
        topSelling,
        rating,
      } = req.body;

      // const photo = req.file.filename;
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
      res
        .status(201)
        .json({ status: "201", message: "Saree Object created..." });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};
