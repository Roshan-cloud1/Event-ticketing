const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');
const { registerSchema } = require('../validators/authValidator');

exports.registerUser = async (req, res) => {
  try {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ errors: parsed.error.flatten().fieldErrors });
    }

    const { name, email, password, role } = parsed.data;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpiry = Date.now() + 10 * 60 * 1000;

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      emailOTP: otp,
      emailOTPExpires: otpExpiry,
    });

    await user.save();
   await sendEmail(
  email,
  "Verify your email", // Subject line
  `Your verification code is: ${otp}. It will expire in 10 minutes.` // Email body
);


    res.status(201).json({ message: "OTP sent to email for verification." });
  } catch (err) {
    console.error("Error in registerUser:", err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
 } catch (err) {
  console.error("Error in LoginUser:", err); // <-- Add this
  res.status(500).json({ message: "Server error" });
}

  if (!user.emailVerified) {
  return res.status(401).json({ message: "Email not verified" });
}

};

exports.verifyEmailOtp = async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  if (
    user.emailOTP === otp &&
    user.emailOTPExpires > Date.now()
  ) {
    user.emailVerified = true;
    user.emailOTP = null;
    user.emailOTPExpires = null;
    await user.save();

    return res.json({ message: "Email verified successfully" });
  } else {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }
};

exports.verifyUser = async (req, res) => {
  const { email, code } = req.body;

  const user = await User.findOne({ email });

  if (!user || user.verificationCode !== code) {
    return res.status(400).json({ message: 'Invalid verification code' });
  }

  if (user.codeExpires < Date.now()) {
    return res.status(400).json({ message: 'Code expired' });
  }

  user.emailVerified = true;
  user.verificationCode = undefined;
  user.codeExpires = undefined;
  await user.save();

  res.json({ message: 'Email verified successfully' });
};


