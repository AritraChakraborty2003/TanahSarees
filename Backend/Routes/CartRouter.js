import express from "express";
import jwt from "jsonwebtoken";
import UserObj from "../Models/User.js";
export const cartRouter = express.Router();

cartRouter.patch("/", async (req, res) => {
  try {
    const token = req.cookies.ecom_token;
    const pid = req.body.pid;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Not authorized", status: "Not Login" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // console.log(decoded);

    console.log("API Hit!!!");

    const user = await UserObj.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.cart.includes(pid)) {
      return res.status(200).json({ message: "Duplicate item sent" });
    }

    const updatedUser = await UserObj.findByIdAndUpdate(
      decoded.id,
      { $addToSet: { cart: pid } }, // Change to $push if duplicates are needed
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Success",
      updatedUser: updatedUser,
      size: updatedUser.cart.length,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
