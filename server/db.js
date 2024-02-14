require('dotenv').config();
const mongoURI = process.env.ATLAS_URI || "";

const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = { connect };