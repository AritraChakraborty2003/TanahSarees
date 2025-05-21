import mongoose from "mongoose";
import validator from "validator";
const adminSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,

      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Password should be strong");
        }
      },
    },
    isMainAdmin: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "admin",
  }
);

const adminObj = mongoose.model("admin", adminSchema);

export default adminObj;
