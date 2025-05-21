import UserObj from "../../Models/User.js";

export const UserGET = async (req, res) => {
  try {
    const users = await UserObj.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userGETbyID = async (req, res) => {
  const { id } = req.query;
  try {
    const user = await UserObj.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//
