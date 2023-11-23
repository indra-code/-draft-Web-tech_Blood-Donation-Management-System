const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept",
  )
  next()
})
app.use(cors())
app.options('*', cors());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your front-end URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization',
}));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/webtech", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});


// Create a schema for your data
const registrationSchema = new mongoose.Schema({
  email: String,
  name: String,
  phoneNumber: String,
  password: String
});

// Create a model based on the schema
const Registration = mongoose.model("Registration", registrationSchema);


// Handle POST request to save registration data
app.post("/api/register", async (req, res) => {
  try {
    const { email, name, phoneNumber, password} = req.body;

    // Create a new instance of the Registration model
    const newRegistration = new Registration({
      email,
      name,
      phoneNumber,
      password,

    });

    console.debug("Saving")
    // Save the data to the database
    await newRegistration.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});


app.get("/api/register", async (req, res) => {
  const uri = "mongodb://127.0.0.1:27017/webtech"; // Replace with your MongoDB URI
  
  // Create a new MongoClient
  const client = new MongoClient(uri);
  
    try {
      // Connect to the MongoDB server
      await client.connect();
  
      // Select the database and collection
      const database = client.db('webtech');
      const collection = database.collection('registrations');
  
      // Fetch data (example: find all documents)
      const documents = await collection.find({}).toArray();
  
      // Process fetched documents
      console.log('Fetched documents:', documents);
      res.status(201).json(documents);
    } catch (error) {
      console.error('Fetching Error:', error);
    } finally {
      // Close the connection when done
      await client.close();
    }
})
// Create a schema for your data
const donorsSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  phonenumber: String,
  address: String,
  bloodgrp:String,
  medicalhistory:String
});

// Create a model based on the schema
const donors = mongoose.model("donors", donorsSchema);
app.post("/api/donors", async (req, res) => {
  try {
    const { firstname,lastname,phonenumber,address,age,bloodgrp,medicalhistory} = req.body;

    // Create a new instance of the Registration model
    const newdonor = new donors({
      firstname,
      lastname,
      phonenumber,
      address,
      bloodgrp,
      medicalhistory

    });

    console.debug("Saving")
    // Save the data to the database
    await newdonor.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});
app.get("/api/donors", async (req, res) => {
  const uri = "mongodb://127.0.0.1:27017/webtech"; // Replace with your MongoDB URI
  
  // Create a new MongoClient
  const client = new MongoClient(uri);
  
    try {
      // Connect to the MongoDB server
      await client.connect();
  
      // Select the database and collection
      const database = client.db('webtech');
      const collection = database.collection('donors');
  
      // Fetch data (example: find all documents)
      const documents = await collection.find({}).toArray();
  
      // Process fetched documents
      console.log('Fetched documents:', documents);
      res.status(201).json(documents);
    } catch (error) {
      console.error('Fetching Error:', error);
    } finally {
      // Close the connection when done
      await client.close();
    }
})

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

