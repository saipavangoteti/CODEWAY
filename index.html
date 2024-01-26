<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }

    input, button {
      margin-bottom: 10px;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px;
      border: 1px solid #ccc;
      margin-bottom: 5px;
    }

    .completed {
      text-decoration: line-through;
      color: #888;
    }
  </style>
</head>
<body>

  <h1>To-Do List</h1>

  <div>
    <input type="text" id="taskTitle" placeholder="Task Title">
    <input type="text" id="taskDescription" placeholder="Task Description (optional)">
    <button onclick="addTask()">Add Task</button>
  </div>

  <ul id="taskList"></ul>

  <script>
    let tasks = [];

    function renderTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';

      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = () => deleteTask(index);

        li.innerHTML = `
          <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
          <span>${task.description || ''}</span>
          <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTaskCompletion(${index})">
        `;
        li.appendChild(deleteButton);
        taskList.appendChild(li);
      });
    }

    function addTask() {
      const title = document.getElementById('taskTitle').value;
      const description = document.getElementById('taskDescription').value;
      if (title.trim() !== '') {
        tasks.push({ title, description, completed: false });
        renderTasks();
        clearInputFields();
      }
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }

    function toggleTaskCompletion(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }

    function clearInputFields() {
      document.getElementById('taskTitle').value = '';
      document.getElementById('taskDescription').value = '';
    }

    // Initial rendering
    renderTasks();
  </script>

</body>
</html>
