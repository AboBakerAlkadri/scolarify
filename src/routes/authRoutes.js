const express = require('express');
const authController = require('../controllers/authController'); // Updated controller import


const router = express.Router();

// router.post('/register', registerUser); // POST /api/auth/register
router.post('/login', authController.loginUser);       // POST /api/auth/login
// router.post('/forgot-password', forgotPassword); // POST /api/auth/forgot-password
// router.post('/signout', signOut);      // POST /api/auth/signout

module.exports = router; 