import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/dbConfig.js";
import { errorHandler } from "./middleware/errorHandler.js";

// Routes
import authRoute from "./routes/authRoutes.js";
import serviceRoute from "./routes/serviceRoutes.js";
import bookRoute from "./routes/bookingRoutes.js";

dotenv.config();

// Initialize app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Connect DB
connectDB();

// Default route
app.get("/", (req, res) => {
  res.status(200).send("✅ FreelanceHub API is running!");
});

// API routes
app.use("/api/auth", authRoute);
app.use("/api/service", serviceRoute);
app.use("/api/booking", bookRoute);

// Error handler (always at the end)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
