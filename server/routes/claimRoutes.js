const express = require("express");

const {
  addClaim,
  getClaims,
} = require("../controllers/claimController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addClaim);

router.get("/", protect, getClaims);

module.exports = router;