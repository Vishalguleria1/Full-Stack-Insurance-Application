const express = require("express");

const {
  addVehicle,
  getVehicles,
  deleteVehicle,
} = require("../controllers/vehicleController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addVehicle);

router.get("/", protect, getVehicles);

router.delete("/:id", protect, deleteVehicle);

module.exports = router;