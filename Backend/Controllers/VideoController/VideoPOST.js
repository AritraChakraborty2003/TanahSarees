import GifObj from "../../Models/Video.js";
import path from "path";

export const VideoPOST = async (req, res) => {
  try {
    const { title } = req.body;
    const url = req.file
      ? `${req.protocol}://${req.get("host")}/${path.posix
          .normalize(req.file.path)
          .replace(/\\/g, "/")}`
      : null;

    if (!title || !url) {
      return res.status(400).json({
        message: "Title and media file are required",
      });
    }

    const media = new GifObj({ title, url });
    await media.save();

    res.status(201).json({ message: "success", media });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
