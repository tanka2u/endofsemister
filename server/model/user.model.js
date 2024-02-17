const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: {type: String, required: true },
  address: {type: String, required: true},  
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
