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
      sparse: true, // ✅ Prevents indexing `null`
      trim: true,
      default: undefined, // ✅ Prevents storing `null`
      validate: {
        validator: function (value) {
          return !value || validator.isEmail(value);
        },
        message: "Invalid email address",
      },
    },

    phone: {
      type: String,
      unique: true, // ✅ Ensure uniqueness for phone
      sparse: true, // ✅ Allows multiple users without phone numbers
      trim: true,
      default: undefined,
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

    password: {
      type: String,
    },
    favourites: [
      {
        type: String,
        trim: true,
      },
    ],

    cart: {
      type: [{ type: Object }],
    },

    orders: {
      type: [String],
      default: [],
    },
    cancel: {
      type: [Object],
      default: [],
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

// ✅ **Middleware to remove `null` before saving**
userSchema.pre("save", function (next) {
  if (!this.email) {
    this.email = undefined;
  }
  if (!this.phone) {
    this.phone = undefined;
  }

  next();
});

const UserObj = mongoose.model("User", userSchema);
export default UserObj;
