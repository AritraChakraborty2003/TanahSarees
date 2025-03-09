import axios from "axios";
import UserObj from "../../Models/User.js";
import jwt from "jsonwebtoken";

export const OAuthLogin = () => {
  return async (req, res) => {
    try {
      console.log("Received Auth Code:", req.body.code);

      // ✅ Exchange code for tokens
      const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: "postmessage",
        grant_type: "authorization_code",
        code: req.body.code,
      });

      const { id_token } = tokenRes.data;

      // ✅ Verify ID Token
      const userRes = await axios.get(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`
      );

      console.log("User Info:", userRes.data);

      const { email, name } = userRes.data;

      let user = await UserObj.findOne({ email });
      if (!user) {
        user = new UserObj({
          username: name,
          email: email,
        });
        await user.save();
      }

      // ✅ Generate JWT Token
      const jwtToken = jwt.sign(
        { id: user._id, email },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );

      // ✅ Proper Cookie Settings for Cross-Origin Requests
      res.cookie("ecom_token", jwtToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 3600000, // 1 hour
      });

      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Google Login Error:", error);
      res.status(400).json({ message: "Invalid Google token" });
    }
  };
};
