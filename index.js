require('dotenv').config();
const express = require('express');
const joi = require('joi');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const helmet = require('helmet');
const connectDB = require("./databaseConnect/mongooseDB");
const moviesRoute = require("./routes/moviesRoute");
const customerRoute = require("./routes/customerRoute");

const PORT = process.env.PORT || 3001;
const URI = process.env.DB_URL;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.use("/movies", moviesRoute);
app.use("/customer", customerRoute);

connectDB(URI);

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error occurred during connection", err);
    }
    else {
        console.log("Connection established successfully at:", PORT);
    }
})
