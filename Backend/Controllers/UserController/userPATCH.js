import UserObj from "../../Models/User.js";
import jwt from "jsonwebtoken";
export const userPATCH = () => {
  return async (req, res) => {
    try {
      const { email, name, gender, address, additionalNo, phone } = req.body;
      const token = req.cookies.ecom_token;
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await UserObj.findByIdAndUpdate(
        decoded.id,
        { email, name, gender, address, additionalNo, phone },
        {
          new: true,
        }
      );
      if (!user) return res.status(404).json({ message: "User not found" });
      res.status(200).json({ user: user, status: "Updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};
