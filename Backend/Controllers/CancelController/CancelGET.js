import CancelObj from "../../Models/Cancel.js";

export const CancelGET = async (req, res) => {
  try {
    const cancels = await CancelObj.find();
    res.status(200).json(cancels);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
