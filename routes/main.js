// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));

router.get("/contact", (req, res) => res.send("<h1>This is the contact page</h1>"));

router.get("/date", (req, res) => {
    const currentDate = new Date();
    res.send(`<h1>Current Date and Time: ${currentDate}</h1>`);
});

// Define a /welcome/:name route that sends a personalised welcome message 
router.get('/welcome/:name', (req, res) => {
    const userName = "Kaveenan"; // Extract the 'name' from the URL
    res.send(`<h1>Welcome, ${userName}!</h1>`);// Welcome message 
});

// Export the router object so index.js can access it
module.exports = router;
