const claimRoutes = require("./routes/claimRoutes");
const policyRoutes = require("./routes/policyRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use("/api/claims", claimRoutes);
app.use("/api/policies", policyRoutes);
app.use(cors());
app.use(express.json());
app.use("/api/vehicles", vehicleRoutes);

app.get("/", (req, res) => {
  res.send("Vehicle Insurance API Running");
});

const PORT = process.env.PORT || 5000;
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});