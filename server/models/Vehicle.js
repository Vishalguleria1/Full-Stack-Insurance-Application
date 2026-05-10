const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    vehicleNumber: {
      type: String,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    manufacturer: {
      type: String,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    fuel: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Vehicle",
  vehicleSchema
);