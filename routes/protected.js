const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth');

router.get('/protected', requireAuth, (req, res) => {
  res.json({ message: 'You made it to the protected route!', user: req.user });
});

module.exports = router;
