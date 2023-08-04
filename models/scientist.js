const mongoose = require("mongoose");

const scientistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  field: { type: String, required: true },
  education: { type: String, required: true },
  description: { type: String, required: true },
  dob: { type: String, required: true },
  died: { type: String, default: "N/A" }, // 'N/A' as the default value for scientists who are alive
  age: { type: Number, required: true },
  knownFor: { type: String, required: true },
  image: { type: String, required: true },
});

// Virtual for createdAt timestamp (set when a document is created)
scientistSchema.virtual("createdAt").get(function () {
  return this._id.getTimestamp();
});

// Virtual for updatedAt timestamp (set when a document is updated)
scientistSchema.virtual("updatedAt").get(function () {
  return new Date();
});

// Creating a model
Scientist = mongoose.model("Scientist", scientistSchema);
module.exports = Scientist;
