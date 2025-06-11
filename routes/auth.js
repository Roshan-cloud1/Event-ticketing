const express = require('express');
const { registerUser, loginUser, verifyUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

const authMiddleware = require('../middleware/authMiddleware');

router.get('/me', authMiddleware, (req, res) => {
  res.json({ message: 'Protected route success!', user: req.user });
});

const { verifyEmailOtp } = require('../controllers/authController');
router.post('/verify', verifyUser);



