const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  childId: { type: mongoose.Schema.Types.ObjectId, ref: 'Child', required: true },
  activityType: { type: String, required: true },
  note: { type: String },
  timestamp: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('ActivityLog', activityLogSchema);
