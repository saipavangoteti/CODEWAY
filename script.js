$(document).ready(function () {
     function renderTasks() {
       $.get('/tasks', function (tasks) {
         const taskList = $('#taskList');
         taskList.empty();

         tasks.forEach(function (task) {
           const li = $('<li>');
           const deleteButton = $('<button>Delete</button>');
           deleteButton.click(function () {
             deleteTask(task._id);
           });

           li.html(`
             <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
             <span>${task.description || ''}</span>
             <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTaskCompletion('${task._id}')">
           `);

           li.append(deleteButton);
           taskList.append(li);
         });
       });
     }

     function addTask() {
       const title = $('#taskTitle').val();
       const description = $('#taskDescription').val();
       if (title.trim() !== '') {
         $.post('/tasks', { title, description, completed: false }, function () {
           renderTasks();
           clearInputFields();
         });
       }
     }

     function deleteTask(id) {
       $.ajax({
         url: '/tasks/' + id,
         type: 'DELETE',
         success: function () {
           renderTasks();
         }
       });
     }

     function toggleTaskCompletion(id) {
       const checkbox = $(`input[data-task-id='${id}']`);
       const completed = checkbox.prop('checked');
       $.ajax({
         url: '/tasks/' + id,
         type: 'PUT',
         data: { completed },
         success: function () {
           renderTasks();
         }
       });
     }

     function clearInputFields() {
       $('#taskTitle').val('');
       $('#taskDescription').val('');
     }

     renderTasks();
   });

