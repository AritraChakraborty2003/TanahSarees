import express from "express";
import jwt from "jsonwebtoken";
import UserObj from "../Models/User.js";

export const FavouriteRouter = express.Router();

FavouriteRouter.patch("/", async (req, res) => {
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

    if (user.favourites.includes(pid)) {
      return res.status(200).json({ message: "Duplicate item sent" });
    }

    const updatedUser = await UserObj.findByIdAndUpdate(
      decoded.id,
      { $addToSet: { favourites: pid } }, // Change to $push if duplicates are needed
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Success",
      updatedUser: updatedUser,
      size: updatedUser.favourites.length,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

FavouriteRouter.patch("/heart", async (req, res) => {
  try {
    const token = req.cookies.ecom_token;
    const pid = req.body.pid;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Not authorized", status: "Not Login" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await UserObj.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.favourites.includes(pid)) {
      user.favourites = user.favourites.filter((fav) => fav !== pid);

      // Save the updated user object
      await user.save();

      return res.status(200).json({
        message: "Favorite removed",
        size: user.favourites.length,
      });
    } else {
      const updatedUser = await UserObj.findByIdAndUpdate(
        decoded.id,
        { $addToSet: { favourites: pid } }, // Change to $push if duplicates are needed
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({
        message: "Success",
        updatedUser: updatedUser,
        size: updatedUser.favourites.length,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
