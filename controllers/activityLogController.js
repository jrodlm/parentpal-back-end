const ActivityLog = require('../models/ActivityLog');

// CREATE
exports.createActivity = async (req, res) => {
    try {
        const Activity = await ActivityLog.create(req.body);
        res.status(201).json(Activity);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// READ ALL
exports.getAllactivities = async (req, res) => {
    try {
        const activities = await ActivityLog.find();
        res.json(activities);
    } catch (err){
        res.status(500).json({ error: err.message });
    }
};


// READ ONE 
exports.getActivityById = async (req, res) => {
    try {
        const activity = await ActivityLog.findById(req.params.id);
        if (!activity) return res.status(400).json({ error: 'Activity not found' });
        res.json(activity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// UPDATE (missing something line 40)
exports.updateActivity = async (req, res) => {
    try {
        const updated = await ActivityLog.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updated) return res.status(400).json({ error: 'Activity not found' });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


// DELETE
exports.deleteActivity = async (req, res) => {
    try {
        const deleted = await ActivityLog.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Activity not found' });
        res.json({ message: 'Activity deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}