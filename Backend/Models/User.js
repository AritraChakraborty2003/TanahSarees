import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: false,
      minlength: 3,
      maxlength: 60,
    },

    email: {
      type: String,
      unique: true,
      required: false,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    phone: {
      type: String,
      trim: true,
      required: false,
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
      required: false,
      validate: {
        validator: function (v) {
          return /^[0-9]{10}$/.test(v);
        },
        message: "Please enter a valid additional number",
      },
    },

    address: {
      type: String,
      trim: true,
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

const UserObj = mongoose.model("User", userSchema);

export default UserObj;
