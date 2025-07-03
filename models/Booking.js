import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
