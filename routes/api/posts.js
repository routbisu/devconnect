const express = require('express');
const router = express.Router();

// @route   GET api/hosts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ message: 'Posts Works' }));

module.exports = router;