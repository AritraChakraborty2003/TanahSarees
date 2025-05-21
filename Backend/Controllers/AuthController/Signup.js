import bcrypt from "bcrypt";
import UserObj from "../../Models/User.js";

export const Signup = () => {
  return async (req, res) => {
    try {
      const { name, email, phone, password } = req.body;

      if (!name || !password) {
        return res
          .status(400)
          .json({ message: "Name and password are required" });
      }

      if (!email && !phone) {
        return res
          .status(400)
          .json({ message: "Either email or phone is required" });
      }

      const passwordHash = await bcrypt.hash(password, 10);

      const userData = {
        name: name,
        password: passwordHash,
      };

      if (email) userData.email = email;
      if (phone) userData.phone = phone;

      const Userobj = new UserObj(userData);
      await Userobj.save();

      res
        .status(201)
        .json({ message: "User registered successfully", status: "success" });
    } catch (err) {
      console.error(err);
      if (err.code === 11000) {
        return res
          .status(400)
          .json({ message: "Duplicate entry detected", status: "error" });
      }
      return res.status(500).json({ message: "Server Error", status: "error" });
    }
  };
};
