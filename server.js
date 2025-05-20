const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const User = require('./models/User');
const Child = require('./models/Child');
const ActivityLog = require('./models/ActivityLog');

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});


mongoose.connection.on('connected', async () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);

  try {
    const testUser = await User.create({
      name: 'Test User',
      email: 'test11@example.com',
      passwordHash: 'hashedpassword123',
    });

        console.log('✅ User created:', testUser);
  } catch (error) {
    console.error('❌ Error creating user:', error.message);
  }
});

console.log('Working models:', {User, Child, ActivityLog});

app.use(express.json());
app.use(logger('dev'));

// Routes go here 

const testRoutes = require('./routes/test');
app.use('/api/test', testRoutes);


app.listen(3000, () => {
  console.log('The express app is ready!');
});
