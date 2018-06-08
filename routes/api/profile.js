const express = require('express');
const router = express.Router();

// @route   GET api/hosts/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ message: 'Profile Works' }));

module.exports = router;