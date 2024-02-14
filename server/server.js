// app.js
const { connect } = require('./db');
connect();
const Event = require('./model/event.model');
const Task = require('./model/task.model');
const EventService = require('./services/event.service');
const TaskService = require('./services/task.services');
const UserAddService = require('./services/user.services');
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/home', (req, res) => {
  res.send('Welcome to my Express API!');
});

app.post('/events/create', async (req, res) => {
  const eventService = new EventService();
  const body = req.body;
  const event = new Event({
    eventName: body.eventName,
    eventDate: body.eventDate,
    location: body.location,
    eventDescription: body.eventDescription,
    eventResponsible: body.eventResponsible,
    participants: body.participants
  });
  const response = await eventService.create(event);
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/tasks/create', async (req, res) => {
  const taskService = new TaskService();
  const body = req.body;
  const newTask = new Task({
    event: body.event,
    taskTitle: body.taskTitle,
    taskDescription: body.taskDescription,
    deadline: body.deadline,
    assignee: body.assignee
  });
  const response = await taskService.create(newTask);
  res.json(response);
});

app.post('/users', async (req, res) => {
  const useraddService = new UserAddService();
  const body = req.body;
  const response = await useraddService.create(body.email, body.password, body.confirmPassword);
  res.json(response);
});

