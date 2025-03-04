import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 60,
    },

    image: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Email is invalid",
      },
    },

    phone: {
      type: String,
      trim: true,
      validate: {
        validator: (v) => /^\d{10}$/.test(v),
        message: "Please enter a valid phone number",
      },
    },

    password: {
      type: String,
      validate: {
        validator: (value) => validator.isStrongPassword(value),
        message: "Password should be strong",
      },
    },

    additionalNo: {
      type: String,
      trim: true,
      validate: {
        validator: (v) => /^[0-9]{10}$/.test(v),
        message: "Please enter a valid additional number",
      },
    },

    address: {
      type: String,
      trim: true,
    },

    favourites: [
      {
        type: String,
        trim: true,
      },
    ],

    cart: {
      type: [{ type: Object }], // Allows storing objects dynamically
    },

    orders: [
      {
        type: String,
        trim: true,
      },
    ],

    cancel: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const UserObj = mongoose.model("User", userSchema);

export default UserObj;
