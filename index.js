// Set up express
const express = require("express");
const app = express();
const port = 8081;

// Load the route handlers from the 'routes/main.js' file
const mainRoutes = require("./routes/main");

// Use the loaded routes for the application
app.use('/', mainRoutes);

// Handle the routes
app.get("/", (req, res) => res.send("Hello World!")); 

// Define the /about route that sends an about page as a response 
app.get('/about', (req, res) => res.send ('<h1>This is about page</h1>'))

// Define the / contact route that sends an about page as a response 
app.get('/contact', (req, res) => res.send ('<h1>This is contact page</h1>'))

// Define the /date route that sends the current date and time
app.get('/date', (req, res) => {
    const currentDate = new Date();
    res.send(`<h1>Current Date and Time: ${currentDate}</h1>`);
});

// Define a /welcome/:name route that sends a personalised welcome message 
app.get('/welcome/:name', (req, res) => {
    const userName = "Kaveenan"; // Extract the 'name' from the URL
    res.send(`<h1>Welcome, ${userName}!</h1>`);// Welcome message 
});

// Start listening for HTTP requests
app.listen(port, 
() => console.log(`Node server is running on port ${port}...`)); 
