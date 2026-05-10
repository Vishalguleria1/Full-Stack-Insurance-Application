const Vehicle = require("../models/Vehicle");

const addVehicle = async (req, res) => {
  try {

    const {
      vehicleNumber,
      model,
      manufacturer,
      year,
      fuel,
    } = req.body;

    if (
      !vehicleNumber ||
      !model ||
      !manufacturer ||
      !year ||
      !fuel
    ) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const vehicle = await Vehicle.create({
      user: req.user._id,
      vehicleNumber,
      model,
      manufacturer,
      year,
      fuel,
    });

    res.status(201).json(vehicle);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

const getVehicles = async (req, res) => {
  try {

    const vehicles = await Vehicle.find({
      user: req.user._id,
    });

    res.status(200).json(vehicles);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteVehicle = async (req, res) => {
  try {

    const vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        message: "Vehicle not found",
      });
    }

    await vehicle.deleteOne();

    res.status(200).json({
      message: "Vehicle deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addVehicle,
  getVehicles,
  deleteVehicle,
};