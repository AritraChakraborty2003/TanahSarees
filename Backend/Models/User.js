import mongoose from "mongoose";

const userShcema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 2,
      maxlength: 600,
      validate: {
        validator: function (v) {
          return /^(?=.*[@$_])[A-Za-z0-9@$_]+$/.test(v);
        },
        message: "Name must contain at least one '@', '$', or '_'",
      },
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
    password: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Password should be strong");
        }
      },
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const UserObj = mongoose.model("User", userShcema);

export default UserObj;
