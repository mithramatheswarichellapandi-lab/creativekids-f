const express = require("express");
const router = express.Router();
const Franchise = require("../models/Franchise");
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    const { name, phone, email, city, pincode } = req.body;

    // Save to MongoDB
    const newFranchise = new Franchise({
      name,
      phone,
      email,
      city,
      pincode,
    });

    await newFranchise.save();

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "creativekidzplayschool@gmail.com",
      subject: "New Franchise Enquiry",
      html: `
        <h3>New Franchise Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Pincode:</b> ${pincode}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Enquiry submitted successfully ✅" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;