require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

async function dbConnect() {
  try {
    await mongoose.connect(process.env.URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}
dbConnect();

const Contact = require("./models/Contact");
  // creat Port
const port = process.env.PORT || 3000;
// POST
app.post("/contacts", async (req, res) => {
  try {
    const { fullName, phones, socialMedia } = req.body;
    if (!fullName) {
      return res.status(400).json({ message: "Error: Missed Data. All fields are required" });
    }
    const contact = await Contact.create({ fullName, phones, socialMedia });
    console.log("Received user data:", contact);

    res.status(201).json({
      message: "Contact created successfully",
      data: contact,
    });
  } catch (err) {
    // Catch only handling errors related to server issues, 500 status code
    console.log(err);
  }
});
// GET
app.get("/contacts", async (req, res) => {
  const contacts = await Contact.find();
  res.json({ success: true, count: contacts.length, data: contacts});
});

// Run the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});