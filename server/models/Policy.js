const mongoose = require("mongoose");

const policySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    vehicle: {
      type: String,
      required: true,
    },

    policyType: {
      type: String,
      required: true,
    },

    premium: {
      type: Number,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Active", "Pending", "Expired"],
      default: "Pending",
    },

    expiryDate: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Policy",
  policySchema
);