import React from "react";
import crypto from "crypto";
import twilio from "twilio";
import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end;
  }
}

// GENERATE 4 DIGIT NUMBER
const otp = crypto.randomInt(1000, 9999);

// HASH OTP
const hashOtp = bcrypt.hash(otp.toString(), 10);

// INTILIZATION THE TWILIO CLIENT
const client = twilio(
  process.env.TWILIO_AUTH_TOKEN,
  process.env.TWILIO_ACCOUNT_SID
);

try {
  await client.messages.create({
    body: `your OTP is:${otp}`,
    from: process.env.TWILIO_PHONE_NUMBER, //OUR NUMBER
    to: req.body.phone,
  });
} catch (error) {
  req.json({
    status: 500,
    message: "Cant send otp",
  });
}
