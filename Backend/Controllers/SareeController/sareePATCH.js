import sareeObj from "../../Models/Saree.js";

export const SareePATCH = () => {
  return async (req, res) => {
    try {
      // ✅ Extract ID correctly
      const { sku } = req.body;
      const {
        type,
        sname,
        photo,
        material,
        colour,
        discount,
        occasion,
        topSelling,
        rating,
      } = req.body;
      if (!sku) {
        return res
          .status(400)
          .json({ success: false, message: "Saree SKU is required" });
      }
      // ✅ Find and update the document
      const updatedSaree = await sareeObj.findOneAndUpdate(
        { sku },
        {
          type,
          sname,
          photo,
          material,
          colour,
          discount,
          occasion,
          topSelling,
          rating,
        },
        {
          new: true,
        }
      );
      if (!updatedSaree) {
        return res
          .status(404)
          .json({ success: false, message: "Saree not found" });
      }
      // ✅ Send success response
      res.status(200).json({
        success: true,
        message: "Saree updated successfully",
        updatedSaree,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};
