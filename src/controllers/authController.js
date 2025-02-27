const User = require('../models/User');  // Assuming you have a User model
const { auth, signInWithEmailAndPassword,sendPasswordResetEmail } = require('../utils/firebaseClient');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify user with Firebase Authentication (email/password)
    const userCredential = await signInWithEmailAndPassword(auth, email, password); 

    // After login, get the Firebase ID token
    const idToken = await userCredential.user.getIdToken();


    return res.status(200).json({ message: 'Login successful', idToken}); 
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Login failed', error: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the user exists in your database (optional but recommended)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send a password reset email using Firebase Authentication
    await sendPasswordResetEmail(auth, email);

    return res.status(200).json({ message: 'Password reset email sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to send password reset email', error: error.message });
  }
};

module.exports = { loginUser, forgotPassword };

