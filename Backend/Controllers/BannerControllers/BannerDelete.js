import bannerObj from "../../Models/Banner.js";

const BannerDelete = async (req, res) => {
  console.log(req);
  try {
    const { title } = req.query;
    console.log(title);
    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }

    const deletedBanner = await bannerObj.findOneAndDelete({ title });

    if (!deletedBanner) {
      return res
        .status(404)
        .json({ success: false, message: "Banner not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Banner deleted successfully" });
  } catch (error) {
    console.error("Error deleting banner:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// ✅ Fix: Export as default
export default BannerDelete;
