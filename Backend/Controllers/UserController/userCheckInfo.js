import UserObj from "../../Models/User.js";
import jwt from "jsonwebtoken";
export const userCheckInfo = async (req, res) => {
  try {
    const token = req.cookies.ecom_token;
    const { type } = req.query;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Not authorized", status: "Not Login" });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // 🔍 Debugging

    // Find user by ID
    const user = await UserObj.findById(decoded.id);

    const { name, address, phone } = user;

    if (type === "review" || type === "Review") {
      if (!name) {
        return res.status(400).json({ message: "Name is required" });
      } else {
        return res.status(200).json({ message: "Required data present" });
      }
    } else if (type === "Buy Now" || type === "Buy") {
      if (!address) {
        return res.status(400).json({ message: "Address is required" });
      }
      if (!phone) {
        return res.status(400).json({ message: "Phone number is required" });
      }
      return res.status(200).json({ message: "Required data present" });
    }

    return res.status(400).json({ message: "Invalid type given" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
