import VideoObj from "../../Models/Video.js"; // ✅ Ensure correct model

export const VideoGET = async (req, res) => {
  try {
    const videos = await VideoObj.find(); // ✅ Ensure correct model is used
    res.status(200).json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
