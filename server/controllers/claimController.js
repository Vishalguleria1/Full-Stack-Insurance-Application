const Claim = require("../models/Claim");

const addClaim = async (req, res) => {
  try {

    const {
      vehicle,
      amount,
      reason,
    } = req.body;

    if (
      !vehicle ||
      !amount ||
      !reason
    ) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const claim = await Claim.create({
      user: req.user._id,
      vehicle,
      amount,
      reason,
      status: "Pending",
    });

    res.status(201).json(claim);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

const getClaims = async (req, res) => {
  try {

    const claims = await Claim.find({
      user: req.user._id,
    });

    res.status(200).json(claims);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addClaim,
  getClaims,
};