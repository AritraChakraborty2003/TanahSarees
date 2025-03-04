import UserObj from "../../Models/User.js";
import jwt from "jsonwebtoken";

export const generalCartPatch = () => {
  return async (req, res) => {
    try {
      const token = req.cookies.ecom_token;
      const pid = req.body.pid;
      if (!token) {
        return res
          .status(401)
          .json({ message: "Not authorized", status: "Not Login" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      console.log("API Hit!!!");

      const user = await UserObj.findById(decoded.id);
      if (!user) return res.status(404).json({ message: "User not found" });

      // Check if product already exists in cart
      const itemIndex = user.cart.findIndex((item) => item.pid === pid);

      if (itemIndex > -1) {
        return res.status(200).json({ message: "Duplicate item sent" });
      }

      // Push as an object { pid, qty }
      const updatedUser = await UserObj.findByIdAndUpdate(
        decoded.id,
        { $push: { cart: { pid, qty: 1 } } }, // ✅ Fix: Storing cart as array of objects
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
  };
};

export const IncreaseCartPatch = () => {
  return async (req, res) => {
    try {
      const token = req.cookies.ecom_token;
      const pid = req.body.pid;
      if (!token) {
        return res
          .status(401)
          .json({ message: "Not authorized", status: "Not Login" });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      const updatedUser = await UserObj.findOneAndUpdate(
        { _id: decoded.id, "cart.pid": pid }, // Find user with matching cart item
        { $inc: { "cart.$.qty": 1 } }, // ✅ Increase qty by 1
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "Item not found in cart" });
      }

      return res.json({ message: "Success", cart: updatedUser.cart });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  };
};

export const DecreaseCartPatch = () => {
  return async (req, res) => {
    try {
      const token = req.cookies.ecom_token;
      const pid = req.body.pid;
      if (!token) {
        return res
          .status(401)
          .json({ message: "Not authorized", status: "Not Login" });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      const user = await UserObj.findOne({ _id: decoded.id, "cart.pid": pid });

      if (!user) return res.status(404).json({ message: "User not found" });

      const item = user.cart.find((item) => item.pid === pid);

      if (!item)
        return res.status(404).json({ message: "Item not found in cart" });

      if (item.qty > 1) {
        // Decrease quantity
        const updatedUser = await UserObj.findOneAndUpdate(
          { _id: decoded.id, "cart.pid": pid },
          { $inc: { "cart.$.qty": -1 } }, // Decrease qty by 1
          { new: true }
        );
        return res.json({ message: "Success", cart: updatedUser.cart });
      } else {
        // Remove item from cart if qty is 1
        const updatedUser = await UserObj.findOneAndUpdate(
          { _id: decoded.id },
          { $pull: { cart: { pid } } }, // Remove item
          { new: true }
        );
        return res.json({ message: "Success", cart: updatedUser.cart });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error", error });
    }
  };
};
export const RemoveCartItem = () => {
  return async (req, res) => {
    try {
      const token = req.cookies.ecom_token;
      if (!token) {
        return res
          .status(401)
          .json({ message: "Not authorized", status: "Not Login" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const { pid } = req.body;

      const updatedUser = await UserObj.findByIdAndUpdate(
        decoded.id,
        { $pull: { cart: { pid } } }, // Removes the specific pid from cart
        { new: true }
      );

      if (!updatedUser)
        return res.status(404).json({ message: "User not found" });

      return res.json({
        message: "success",
        cart: updatedUser.cart,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error", error });
    }
  };
};
