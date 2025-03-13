const express = require("express");
const router = express.Router();
const Interview = require("../models/Interview");

router.post("/", async (req, res) => {
  try {
    const { title, description, questions } = req.body;

    if (!title || !description || !questions || !Array.isArray(questions)) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const interview = new Interview({ title, description, questions });
    await interview.save();

    res.status(201).json(interview);
  } catch (error) {
    console.error("Error creating interview:", error)
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const interviews = await Interview.find();
    res.json(interviews);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
