const express = require("express");

const {
  addPolicy,
  getPolicies,
} = require("../controllers/policyController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addPolicy);

router.get("/", protect, getPolicies);

module.exports = router;