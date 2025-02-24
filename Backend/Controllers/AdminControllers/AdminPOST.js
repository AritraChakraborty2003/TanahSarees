import adminObj from "../../Models/admin.js";
import bcrypt from "bcrypt";

export const AdminPOST = () => {
  return async (req, res) => {
    try {
      const { email, password, isMainAdmin } = req.body;

      console.log(isMainAdmin, password);
      const passwordHash = await bcrypt.hash(password, 10);
      const admin = new adminObj({
        email: email,
        password: passwordHash,
        isMainAdmin: isMainAdmin,
      });
      await admin.save();
      return res.status(201).json({ message: "success", staus: 200 });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
};
