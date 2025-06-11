const { z } = require("zod");

exports.registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["organizer", "attendee"])

});

exports.verifyOtpSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(6)
});
