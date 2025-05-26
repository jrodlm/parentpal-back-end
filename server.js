const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// ROUTES 
const activityController = require('./controllers/activities');
const authController = require('./controllers/auth');
const childController = require('./controllers/children');

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


// EXPRESS MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.use(cors());
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(logger('dev'));

// Routes go here
app.use('/children', childController);
app.use('/auth', authController);
app.use('/activity', activityController);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
