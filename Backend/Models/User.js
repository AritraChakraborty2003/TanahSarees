import mongoose from "mongoose";
import validator from "validator";

const userShcema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      lowercase: true,
      minlength: 2,
      maxlength: 600,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    phone: {
      type: String,
      trim: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: "Please enter a valid phone number",
      },
    },
    password: {
      type: String,
      required: false,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Password should be strong");
        }
      },
    },
    additionalNo: {
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          return /^[0-9]{10}$/.test(v);
        },
        message: "Please enter a valid additional number",
      },
    },
    favourites: {
      type: [String],
      trim: true,
    },
    cart: {
      type: [String],
      trim: true,
    },
    orders: {
      type: [String],
      trim: true,
    },
    cancel: {
      type: [String],
      trim: true,
    },
    favourites: {
      type: [String],
      trim: true,
    },
  },

  {
    timestamps: true,
    collection: "users",
  }
);

const UserObj = mongoose.model("User", userShcema);

export default UserObj;
