import adminObj from "../../Models/admin.js";
export const AdminGET = async (req, res) => {
  try {
    const admins = await adminObj.find({});
    res.status(200).json(admins);
  } catch (error) {
    {
      res.status(500).json({ message: error.message });
    }
  }
};
