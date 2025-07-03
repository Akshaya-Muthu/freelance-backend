import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    responsibilities: [
      {
        type: String,
        required: true
      }
    ],
    skills: [
      {
        type: String,
        required: true
      }
    ],
    // These fields are submitted by the client during booking
    githubLink: {
      type: String
    },
    linkedinLink: {
      type: String
    },
    portfolioLink: {
      type: String
    },
    resume: {
      type: String // You can store the file path / URL of the uploaded resume
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" // Optional: if you want to track which freelancer created the service
    }
  },
  {
    timestamps: true
  }
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;
