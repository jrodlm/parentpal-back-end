const Child = require('../models/Child');

// CREATE A CHILD
exports.createChild = async (req, res) => {
  try {
    const child = await Child.create(req.body);
    res.status(201).json(child);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ/SEE ALL CHILDREN
exports.getChildren = async (req, res) => {
  try {
    const children = await Child.find();
    res.json(children);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ DETAILS OF A CHILD
exports.getChildById = async (req, res) => {
  try {
    const child = await Child.findById(req.params.id);
    if (!child) return res.status(404).json({ error: 'Child not found' });
    res.json(child);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE A CHILD
exports.updateChild = async (req, res) => {
  try {
    const updated = await Child.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Child not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE A CHILD
exports.deleteChild = async (req, res) => {
  try {
    const deleted = await Child.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Child not found' });
    res.json({ message: 'Child deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
