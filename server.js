const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const User = require('./models/User');
const Child = require('./models/Child');
const ActivityLog = require('./models/ActivityLog');

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});


mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


console.log('Working models:', {User, Child, ActivityLog});

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

// Routes go here 
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


app.listen(3000, () => {
  console.log('The express app is ready!');
});
