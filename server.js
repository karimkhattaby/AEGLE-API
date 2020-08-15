// @ts-nocheck

// Importing Core Dependencies
const express = require('express');

// Initializing Express Server
const app = express();
const PORT = process.env.PORT || 3001;

// Required Middlewares for API Functionality
app.use(cors());
app.use(express.json());
