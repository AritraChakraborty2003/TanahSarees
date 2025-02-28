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

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    // Change this to your React frontend URL
    credentials: true, // ✅ Allows sending cookies
  })
);
app.use(express.urlencoded({ extended: true })); // ✅ Parses URL-encoded form data

app.use(express.static("uploads")); // Serve static files

// ✅ MongoDB Connection
connectDB(process.env.MONGODB_URI);

// ✅ Routes (MUST COME AFTER MIDDLEWARE)
app.use("/", generalRouter);
app.use("/api/v1", generalRouter);
app.use("/api/v1/sarees", SareeRouter);
app.use("/api/v1/saree", SareeRouter);
app.use("/api/v1/orders", OrderRouter);
app.use("/api/v1/cancel", CancelRouter);
app.use("/api/v1/testimonials", TestimonialRouter);
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/admin", AdminRouter);
app.use("/api/v1/cart", cartRouter);

//To handle check Auth:
app.get("/api/v1/check", verifyUser, (req, res) => {
  res.json({ isAuthenticated: true });
});

// ✅ Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
