import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./Connection/DbConnect.js";
import { generalRouter } from "./Routes/GeneralRouter.js";
import { SareeRouter } from "./Routes/SareeRouter.js";
import { OrderRouter } from "./Routes/OrderRouter.js";
import { CancelRouter } from "./Routes/CancelRouter.js";
import { TestimonialRouter } from "./Routes/TestimonialRouter.js";
import { AuthRouter } from "./Routes/AuthRouter.js";
import { userRouter } from "./Routes/UserRouter.js";
import { AdminRouter } from "./Routes/AdminRouter.js";
import { verifyUser } from "./utils/verifyUser.js";
import { cartRouter } from "./Routes/CartRouter.js";
import { FavouriteRouter } from "./Routes/FavouriteRouter.js";
import { PaymentRouter } from "./Routes/PaymentRouter.js";
import { SaleRouter } from "./Routes/SaleRouter.js";

dotenv.config();

const app = express();

// ✅ Use `cors()` to handle CORS (Only once)

if (process.env.ENV != "development") {
  app.use(
    cors({
      origin: "https://tanahsarees.com", // ❌ Remove Array, Use Single String
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  );
} else {
  console.log("Hi");
  app.use(
    cors({
      origin: "http://localhost:5173", // ❌ Remove Array, Use Single String
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  );
}

// ✅ Middleware
app.use(express.json()); // Parse JSON body
app.use(cookieParser()); // Parse cookies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(express.static("uploads")); // Serve static files

// ✅ MongoDB Connection
connectDB(process.env.MONGODB_URI);

// ✅ Routes
app.use("/", generalRouter);
app.use("/api/v1", generalRouter);
app.use("/api/v1/sarees", SareeRouter);
app.use("/api/v1/orders", OrderRouter);
app.use("/api/v1/cancel", CancelRouter);
app.use("/api/v1/testimonials", TestimonialRouter);
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/admin", AdminRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/favourites", FavouriteRouter);
app.use("/api/v1/checkout", PaymentRouter);
app.use("/api/v1/sales", SaleRouter);

// ✅ Authentication Check Route
app.get("/api/v1/check", verifyUser, (req, res) => {
  res.json({ isAuthenticated: true });
});

// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
