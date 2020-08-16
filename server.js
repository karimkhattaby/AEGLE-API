// @ts-nocheck

// Importing Core Dependencies
const express = require('express');
const cors = require('cors');
const knex = require('knex');

// Importing Controllers
const signin = require('./controllers/signin');
const patient = require('./controllers/patient');
const image = require('./controllers/image');
const checkup = require('./controllers/checkup');
const report = require('./controllers/report');

// Importing Database Settings
const { db_settings } = require('./private/db_config');

// Initializing Express Server
const app = express();
const PORT = 3001;

// Initializing Database
const db = knex(db_settings);

// Required Middlewares for API Functionality
app.use(cors());
app.use(express.json());

// GET root
app.get("/", (req, res) => res.send("Welcome to AEGLE API."));
//app.post("/signup", (req, res) => {  });
// POST signin patient
//app.post("/signin/patient", (req, res) => { signin.handleSigninPatient });
// POST signin doctor
//app.post("/signin/doctor", (req, res) => { signin.handleSigninDoctor });
// POST patient
//app.post("/patient", (req, res) => { patient.handlePatientPost });
// GET patient
app.get("/patient/:id", (req, res) => { patient.handlePatientGet(req, res, db) });
// PUT patient
//app.put("/patient/:id", (req, res) => { patient.handlePatientPut });
// DELETE patient
//app.delete("/patient/:id", (req, res) => { patient.handlePatientDelete });
// POST image
app.post("/image/:id", (req, res) => { image.handleImagePost(req, res, db) });
// POST checkup
app.post("/checkup/:id", (req, res) => { checkup.handleCheckupPost(req, res, db) });
// GET Report
app.get("/report/:id", (req, res) => { report.handleReportGet(req, res, db) });
// PUT Report
//app.put("/report/:id", (req, res) => { report.handleReportPut });

// Starting Server to Listen to Requests
app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});