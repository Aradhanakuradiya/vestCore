import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import User from "../model/UserModel.js"; // Ensure the file extension is included for ESM

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password, username } = req.body;
  console.log(req.body);
  if (!email || !password || !username) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }
   // const hashedPassword = await bcrypt.hash(password, 10);
const newUser = new User({ email, password, username });
await newUser.save();
    res.status(201).json({ success: true, message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User does not exist" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }
    res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default router;


