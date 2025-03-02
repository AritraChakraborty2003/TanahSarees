import bcrypt from "bcrypt";
import UserObj from "../../Models/User.js";
export const Signup = () => {
  return async (req, res) => {
    try {
      const { name, email, phone, password } = req.body;

      const passwordHash = await bcrypt.hash(password, 10);
      const Userobj = new UserObj({
        name: name,
        phone: phone,
        email: email,
        password: passwordHash,
      });
      await Userobj.save();
      res
        .status(201)
        .json({ message: "User registered successfully", status: "success" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server Error", status: "error" });
    }
  };
};
