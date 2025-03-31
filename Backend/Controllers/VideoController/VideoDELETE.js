import GifObj from "../../Models/Video.js";

export const VideoDELETE = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "GIF ID is required" });
    }

    const deletedGif = await GifObj.findByIdAndDelete(id);

    if (!deletedGif) {
      return res.status(404).json({ success: false, message: "GIF not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "GIF deleted successfully" });
  } catch (error) {
    console.error("Error deleting GIF:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
