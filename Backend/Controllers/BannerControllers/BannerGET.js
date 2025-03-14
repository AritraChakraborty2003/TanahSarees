import bannerObj from "../../Models/Banner.js";

export const BannerGET = async (req, res) => {
  try {
    const banners = await bannerObj.find();
    res.status(200).json(banners);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
