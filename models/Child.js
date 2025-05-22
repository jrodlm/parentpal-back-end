const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
  parentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  birthdate: { 
    type: Date 
  },
  gender: { 
    type: String, 
    enum: ['male', 'female', 'other'] 
  },
})

const Child = mongoose.model('Child', childSchema);

module.exports = Child;
