const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "build")));

// API routes
app.get("/api/health", (req, res) => {
  res.json({
    message: "Server is running successfully!",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/me", (req, res) => {
  res.json({ message: "me" });
});

// Handle React routing, return all requests to React app
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📱 React app will be available at http://localhost:${PORT}`);
  console.log(`🔧 API health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
