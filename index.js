const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const quotesRoutes = require('./routes/quotes');
const cors = require('cors');
require('dotenv/config');

const app = express();
const PORT = process.env.PORT || 3000

app.use(
    cors({
      allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
      exposedHeaders: ["authorization"], // you can change the headers
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false
    })
)

// CORS error work around for testing in local env
/*
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
})
*/

// Data parsing
app.use(bodyParser.json());

// Routes
app.use('/quotes', quotesRoutes);

// Database connection
mongoose.connect(
    process.env.DB_CONNECTION,
    {dbName: "quoteDB"}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.listen(PORT, () => {
    console.log("Server is running...");
});
  

