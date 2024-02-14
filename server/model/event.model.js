const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  location: { type: String, required: true },
  eventDescription: { type: String, required: true },
  eventResponsible: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  participants: [{ type: String }]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
