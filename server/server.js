// app.js
const { connect } = require('./db');
connect();
const Event = require('./model/event.model');
const Task = require('./model/task.model');
const User = require('./model/user.model');
const EventService = require('./services/event.service');
const TaskService = require('./services/task.services');
const UserService = require('./services/user.services');
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const Keycloak = require('keycloak-connect');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');
const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak({
  store: memoryStore
});

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8080'] // Allow requests from port 3000
}));

app.use(session({
  resave: false,
  secret: 'projectx',
  saveUninitialized: true,
  store: memoryStore
}));

app.use(keycloak.middleware());

app.use(express.json());
// keycloak.protect()
app.get('/home' , (req, res) => {
  res.send('Welcome to my Express API!');
});

app.post('/login', async (req, res) => {
  try {
    console.log("Logging in");
    const response = await axios.post('http://localhost:8080/auth/realms/projectx/protocol/openid-connect/token', {
      grant_type: "password",
      client_id: 'projectx',
      username: 'projectx',
      password: 'test123',
    }, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      timeout: 3500,
    });
    console.log(response);
    const username = req.body.username;
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const password = req.body.password;
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    return res.status(200).json({ message: 'Login successful', user: user });
  } catch(error) {
    console.error(error);
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  
    // Send the token back to the client
    // res.json({ token: response.data.access_token });
});

// keycloak.protect()
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

app.get('/users', async function(req, res) {
  const userService = new UserService();
  const users = await userService.getAllUsers();
  res.json(users);
});

app.get('/events', async function(req, res){
  const eventService = new EventService();
  const events = await eventService.getEvents();
  res.json(events);
});

app.get('/tasks', async function(req, res){
  const tasks = await Task.find();
  res.json(tasks);
});

app.get('/events/:id', async function(req, res){
  const eventId = req.params.id;

  try {
    const event = await Event.findById(eventId).populate('eventResponsible');
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    console.error('Error fetching event details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
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
  console.log(newTask);
  const response = await taskService.create(newTask);
  res.json(response);
});

app.post('/user/create', async (req, res) => {
  const userService = new UserService();
  const body = req.body;
  const newUser = new User({
    username: body.username,
    name: body.name,
    email: body.email,
    password: body.password,
    dateOfBirth: body.dateofbirth,
    address: body.address
  });
  const response = await userService.create(newUser);
  res.json(response);
});

app.delete('/events/:id', async (req, res) => {
  const eventId = req.params.id;
  const event = await Event.findByIdAndDelete(eventId);
  res.json(true);
});

app.put('/events/:id', async (req, res) => {
  const eventId = req.params.id;
  const updateData = req.body; // Data to update, sent in the request body
  try {
    const updatedEvent = await Event.findByIdAndUpdate(eventId, updateData, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(updatedEvent);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
