const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db"); // import MongoDB connection

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const enquiryRoutes = require("./routes/enquiryRoutes");
const franchiseRoute = require("./routes/franchise");

app.use("/api/franchise", franchiseRoute);
app.use("/api/enquiry", enquiryRoutes);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});