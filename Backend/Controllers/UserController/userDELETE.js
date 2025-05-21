import UserObj from "../../Models/User.js";
import jwt from "jsonwebtoken";
export const userDELETE = async (req, res) => {
  try {
    const token = req.cookies.ecom_token;

    console.log(token);
    if (!token) {
      return res
        .status(401)
        .json({ message: "Not authorized", status: "Not Login" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await UserObj.findByIdAndDelete(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.clearCookie("ecom_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure in production
      sameSite: "Lax", // Allow cross-site usage but prevent CSRF attacks
    });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
