const Scientist = require("../models/scientist");

// Controller functions for handling scientist routes
exports.getAllScientists = async (req, res) => {
  try {
    const scientists = await Scientist.find();
    res.json(scientists);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getScientistById = async (req, res) => {
  try {
    const scientist = await Scientist.findById(req.params.id);
    if (!scientist) {
      res.status(404).json({ error: "Scientist not found" });
    } else {
      res.json(scientist);
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createScientist = async (req, res) => {
  try {
    // Get the data for the new scientist from the request body
    const {
      name,
      country,
      field,
      education,
      description,
      dob,
      died,
      knownFor,
      image,
    } = req.body;

    // Calculate the age based on the date of birth (dob) and the current year
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const birthYear = birthDate.getFullYear();
    const currentYear = currentDate.getFullYear();

    let age = currentYear - birthYear;

    // Check if the birth date's month and day are after the current date's month and day
    if (died == "N/A") {
      if (
        birthDate.getMonth() > currentDate.getMonth() ||
        (birthDate.getMonth() === currentDate.getMonth() &&
          birthDate.getDate() > currentDate.getDate())
      ) {
        age--;
      }
    }

    // Create a new scientist object with the calculated age
    const newScientist = new Scientist({
      name,
      country,
      field,
      education,
      description,
      dob,
      died,
      age, // Set the calculated age
      knownFor,
      image,
    });

    // Save the new scientist object to the database
    const savedScientist = await newScientist.save();

    res.status(201).json(savedScientist);
  } catch (error) {
    res.status(500).json({ error: "Unable to add new scientist" });
  }
};

exports.updateScientist = async (req, res) => {
  try {
    const updatedScientist = await Scientist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedScientist) {
      res.status(404).json({ error: "Scientist not found" });
    } else {
      res.json(updatedScientist);
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteScientist = async (req, res) => {
  try {
    const deletedScientist = await Scientist.findByIdAndRemove(req.params.id);
    if (!deletedScientist) {
      res.status(404).json({ error: "Scientist not found" });
    } else {
      res.json(deletedScientist);
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
