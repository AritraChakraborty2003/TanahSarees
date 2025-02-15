import UserObj from "../../Models/User.js";

export const UserGET = async (req, res) => {
  try {
    const users = await UserObj.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
