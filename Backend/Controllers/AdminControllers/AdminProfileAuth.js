import jwt from "jsonwebtoken";
import adminObj from "../../Models/admin.js";
export const AdminProfileAuth = async (req, res) => {
  try {
    // 🔍 Debugging

    const token = req.cookies.ecom_token;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Not authorized", status: "Not Login" });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // 🔍 Debugging

    // Find user by ID
    const user = await adminObj.findById(decoded.id);
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", status: "Not Login" });
    }

    return res.status(200).json({ message: user, status: "User Logged In" });
  } catch (error) {
    console.error("JWT Error:", error); // 🔍 Debugging
    return res.status(401).json({ message: "Not authorized" });
  }
};
