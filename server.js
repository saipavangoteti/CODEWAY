const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/todoList', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const Task = mongoose.model('Task', taskSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const { title, description, completed } = req.body;
  const task = new Task({ title, description, completed });
  await task.save();
  res.json({ message: 'Task added successfully' });
});

app.put('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  const { title, description, completed } = req.body;
  await Task.findByIdAndUpdate(id, { title, description, completed });
  res.json({ message: 'Task updated successfully' });
});

app.delete('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  await Task.findByIdAndDelete(id);
  res.json({ message: 'Task deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
