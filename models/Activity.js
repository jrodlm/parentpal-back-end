const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  childId: { type: mongoose.Schema.Types.ObjectId, ref: 'Child', required: true }, // this would be the name right? 
  activityType: { type: String, required: true },
  note: { type: String },
  date: { type: Date, default: Date.now },
}, { timestamps: true }); // I don't think we need this? 

module.exports = mongoose.model('ActivityLog', activityLogSchema);
