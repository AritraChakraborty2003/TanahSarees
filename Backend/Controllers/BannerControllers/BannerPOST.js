import bannerObj from "../../Models/Banner.js";

export const BannerPOST = () => {
  return async (req, res) => {
    try {
      const { title } = req.body;
      console.log(req);
      const image = req.file.filename;
      const banner = new bannerObj({ title, image });
      await banner.save();
      res.status(201).json({ message: "success", banner });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};
