const express = require("express");
const router = express.Router();
const scientistController = require("../controllers/scientistControllers");

// Define routes for scientists
router.get("/", scientistController.getAllScientists);
router.get("/:id", scientistController.getScientistById);
router.post("/", scientistController.createScientist);
router.put("/:id", scientistController.updateScientist);
router.delete("/:id", scientistController.deleteScientist);

module.exports = router;
