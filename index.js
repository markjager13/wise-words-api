const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const quotesRoutes = require('./routes/quotes');
require('dotenv/config');

const app = express();
const PORT = process.env.PORT || 3000

// CORS
/*
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
})
*/

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type, Accept Authorization"
    )
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, PATCH, GET, DELETE"
      )
      return res.status(200).json({})
    }
    next()
  })


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
  

