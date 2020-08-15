// @ts-nocheck

// Importing Core Dependencies
const express = require('express');
const cors = require('cors');

// Initializing Express Server
const app = express();
const PORT = 3001;

// Required Middlewares for API Functionality
app.use(cors());
app.use(express.json());

// GET root
app.get("/", (req, res) => res.send("Welcome to AEGLE API."));


// Starting Server to Listen to Requests
app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});