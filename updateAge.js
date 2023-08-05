const mongoose = require("mongoose");
const Scientist = require("./models/scientist");

// connecting to MongoDB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", async () => {
  const deadScientists = await Scientist.find({ died: { $ne: "N/A" } });

  // updates the age of scientists who are dead
  for (const scientist of deadScientists) {
    const birthYear = new Date(scientist.dob).getFullYear();
    const deathYear = new Date(scientist.died).getFullYear();
    const age = deathYear - birthYear;

    scientist.age = age;
    await scientist.save();
  }

  console.log("Age update successful");
  mongoose.connection.close();
});
