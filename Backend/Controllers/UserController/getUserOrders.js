import jwt from "jsonwebtoken";
import UserObj from "../../Models/User.js"; // Import User Model
import OrderObj from "../../Models/Orders.js";
export const getUserOrders = async (req, res) => {
  try {
    // Get JWT token from cookies
    const token = req.cookies.ecom_token;
    console.log(token);
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: No token provided." });
    }

    // Decode JWT
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid or expired token." });
    }

    const userId = decoded.id; // Extract userId from token
    const user = await UserObj.findById(userId).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // ✅ Fetch orders manually since `populate()` does not work on strings
    const orders = await OrderObj.find({
      order_id: { $in: user.orders },
    }).populate("pid", "sname sku price photo qty"); // ✅ Fetch product details

    res.status(200).json({ success: true, user, orders });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
