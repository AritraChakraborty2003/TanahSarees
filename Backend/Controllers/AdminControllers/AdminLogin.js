import adminObj from "../../Models/admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const AdminLOGIN = () => {
  return async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user by email (Ensure await is used)
      const admin = await adminObj.findOne({ email: email });

      if (!admin) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Compare passwords correctly (plaintext vs hashed)
      const isPasswordValid = await bcrypt.compare(password, admin.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

      // Generate JWT token
      const jwtToken = jwt.sign(
        { id: admin._id, email, isMainAdmin: admin.isMainAdmin },
        JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      // Set cookie
      res.cookie("ecom_token", jwtToken, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxAge: 3600000, // 1 hour
      });

      return res
        .status(200)
        .json({ message: "Login successful", status: "success" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server Error" });
    }
  };
};
