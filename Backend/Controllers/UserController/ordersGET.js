import UserObj from "../../Models/User.js";
import jwt from "jsonwebtoken";
export const ordersGET = async (req, res) => {
  try {
    // Extract token from cookies
    const token = req.cookies.ecom_token;
    if (!token)
      return res
        .status(401)
        .json({ message: "Unauthorized: No Token Provided" });

    // Decode JWT and extract user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decoded.id;

    // Find user and fetch only the cart field
    const user = await UserObj.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user.orders);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
