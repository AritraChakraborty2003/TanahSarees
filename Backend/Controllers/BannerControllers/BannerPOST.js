import bannerObj from "../../Models/Banner.js";

export const BannerPOST = () => {
  return async (req, res) => {
    try {
      const { title, bannerType } = req.body; // Get bannerType from request body
      const image = req.file.filename;

      // Validate bannerType
      if (!["mobile", "laptop"].includes(bannerType)) {
        return res.status(400).json({ message: "Invalid banner type" });
      }

      const banner = new bannerObj({ title, bannerType, image }); // Include bannerType
      await banner.save();

      res.status(201).json({ message: "success", banner });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};
