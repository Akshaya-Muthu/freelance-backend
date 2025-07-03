import Booking from "../models/Booking.js";

// Create a booking
export const createBooking = async (req, res) => {
  try {
    const { serviceId, date, month, year } = req.body;

    if (!serviceId || !date || !month || !year) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = await Booking.create({
      serviceId,
      userId: req.user._id,
      date,
      month,
      year
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get bookings of the current user
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id }).populate("serviceId", "title");
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
