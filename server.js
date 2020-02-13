const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.get('/', (req, res) => res.send('Hello World'));