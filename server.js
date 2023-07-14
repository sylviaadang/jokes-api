const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require('./config/mongoose.config');

app.use(express.json(). expressurlencoded({ extended: true}));

const AllMyJokeRoutes = require('./routes/joke.routes');
AllMyJokeRoutes(app);

app.listen(port, () => console.log(`Listen on port: ${port}`));


const mongoose = require('mongoose');
