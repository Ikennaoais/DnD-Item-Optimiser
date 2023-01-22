const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect("mongodb://localhost:27017/DarkAndDarker-Data", {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() =>
    console.log("MongoDB Connected")
);

// Get the connection object
const db = mongoose.connection;

// Handle connection errors
db.on('error', console.error.bind(console, 'connection error:'));

// Define the schema for the collection
const equipmentSchema = new mongoose.Schema({
    name: String,
    class: [String],
    quality: String,
    ar_range: [Number],
    agility: Number,
    hs_reduction: Number,
    mr: Number,
    will: Number,
    knowledge: Number,
    strength: Number,
    ms: Number,
    projectile_reduction: Number,
    slot: String
});

// Create a model for the collection
const Equipment = mongoose.model('Equipment', equipmentSchema);

// Retrieve all documents from the collection that have the class "Fighter"
Equipment.find({ class: "Fighter" }, (err, equipment) => {
    if (err) return console.error(err);
    console.log(equipment);
});

//const middleware = require('./middleware');

// Apply Middleware
//app.use(middleware);

// Define routes
app.use('/', routes);

module.exports = app;
