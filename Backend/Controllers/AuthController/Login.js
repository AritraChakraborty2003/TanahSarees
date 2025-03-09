import UserObj from "../../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = () => {
  return async (req, res) => {
    try {
      const { phone, email, password } = req.body;

      // Find user by email (Ensure await is used)
      let user;
      if (!email) {
        user = await UserObj.findOne({ phone: phone });
      }
      if (!phone) {
        user = await UserObj.findOne({ email: email });
      }

      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Compare passwords correctly (plaintext vs hashed)
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

      // Generate JWT token
      let jwtToken;

      if (!email) {
        jwtToken = jwt.sign({ id: user._id, phone }, JWT_SECRET_KEY, {
          expiresIn: "1h",
        });
      } else {
        jwtToken = jwt.sign({ id: user._id, email }, JWT_SECRET_KEY, {
          expiresIn: "1h",
        });
      }

      // Set cookie
      res.cookie("ecom_token", jwtToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
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
