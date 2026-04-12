const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");

// POST: Add enquiry
router.post("/add", async (req, res) => {
  try {
    const { parentName, parentPhone, childName, dob, category } = req.body;

    const newEnquiry = new Enquiry({
      parentName,
      parentPhone,
      childName,
      dob,
      category,
    });

    await newEnquiry.save();

    res.json({ message: "Enquiry saved successfully ✅" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});

module.exports = router;