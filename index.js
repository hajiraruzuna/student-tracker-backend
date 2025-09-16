require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Student Project Tracker Backend is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
