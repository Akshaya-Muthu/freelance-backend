import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createBooking, getUserBookings } from "../controllers/bookingController.js";

const router = express.Router();

// Create a new booking
router.post("/", protect, createBooking);

// Get bookings of the logged-in user
router.get("/mybookings", protect, getUserBookings);

export default router;
