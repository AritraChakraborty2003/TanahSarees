import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Connection/DbConnect.js";

import { generalRouter } from "./Routes/GeneralRouter.js";
import { SareeRouter } from "./Routes/SareeRouter.js";
import { OrderRouter } from "./Routes/OrderRouter.js";
import { CancelRouter } from "./Routes/CancelRouter.js";
import { TestimonialRouter } from "./Routes/TestimonialRouter.js";

//Basic Application Setup
dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("uploads"));
app.use(bodyParser.json());
app.use(cors());

// Load environment variables from .env file
const PORT = process.env.PORT || 3000;

//MongoDB connection
connectDB(process.env.MONGODB_URI);

//routes of project
app.use("/", generalRouter);
app.use("/api/v1", generalRouter);
app.use("/api/v1/sarees", SareeRouter);
app.use("/api/v1/saree", SareeRouter);
app.use("/api/v1/orders", OrderRouter);
app.use("/api/v1/cancel", CancelRouter);
app.use("/api/v1/testimonials", TestimonialRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
