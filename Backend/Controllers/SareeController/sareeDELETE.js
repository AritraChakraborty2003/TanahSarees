import sareeObj from "../../Models/Saree.js";

export const sareeDELETE = async (req, res) => {
  try {
    // ✅ Extract ID correctly
    const { id } = req.query;

    console.log(id);

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Saree ID is required" });
    }

    // ✅ Find and delete the document
    const deletedSaree = await sareeObj.findByIdAndDelete(id);

    if (!deletedSaree) {
      return res
        .status(404)
        .json({ success: false, message: "Saree not found" });
    }

    // ✅ Send success response
    res.status(200).json({
      success: true,
      message: "Saree deleted successfully",
      deletedSaree,
    });
  } catch (error) {
    console.error("Error deleting saree:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
