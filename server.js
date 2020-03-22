const express = require("express");
const connectDB = require('./config/db');

connectDB();

const app = express();
const port = 8000;

app.use(express.json({extended: true}));

// Routing
app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", require('./routes/api/users'));

app.listen(port, () => console.log(`FoodPal listening on port ${port}!`));
