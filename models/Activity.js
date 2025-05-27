const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  childId: { type: mongoose.Schema.Types.ObjectId, ref: 'Child', required: true }, // this would be the name right? 
  enum: ['Nap', 'Meal', 'Snack', 'Potty', 'Play', 'Activity', 'Education', 'Other'],
  note: { type: String },
  date: { type: Date, default: Date.now },
}, { timestamps: true }); 

module.exports = mongoose.model('Activity', activitySchema);
