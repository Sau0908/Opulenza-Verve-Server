import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  selectedHour: {
    type: String,
    required: true,
  },
  partySize: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,

    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  selectedPeriod: {
    type: String,
    reuired: true,
  },
});

export default mongoose.model("Booking", bookingSchema);
