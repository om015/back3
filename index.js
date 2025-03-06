const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Sample Route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running on Vercel!" });
});

// Export Express App for Vercel
module.exports = app;
