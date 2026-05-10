const Policy = require("../models/Policy");

const addPolicy = async (req, res) => {
  try {

    const {
      vehicle,
      policyType,
      premium,
      duration,
    } = req.body;

    if (
      !vehicle ||
      !policyType ||
      !premium ||
      !duration
    ) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const policy = await Policy.create({
      user: req.user._id,
      vehicle,
      policyType,
      premium,
      duration,
      expiryDate: "10 May 2027",
      status: "Active",
    });

    res.status(201).json(policy);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

const getPolicies = async (req, res) => {
  try {

    const policies = await Policy.find({
      user: req.user._id,
    });

    res.status(200).json(policies);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addPolicy,
  getPolicies,
};