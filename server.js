const express = require("express");
const connectDB = require('./config/db');

const app = express();
const port = 8000;

app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`FoodPal listening on port ${port}!`));
