// task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  taskTitle: { type: String, required: true },
  taskDescription: { type: String, required: true },
  deadline: { type: Date, required: true },
  assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
