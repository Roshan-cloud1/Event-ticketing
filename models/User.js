const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
  type: String,
  enum: ["organizer", "attendee"], 
  default: "attendee"
}
,
  emailVerified: {
  type: Boolean,
  default: false
},
verificationCode: String,
codeExpires: Date,


}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
