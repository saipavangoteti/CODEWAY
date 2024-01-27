##CODEWAY

## Simple To-Do List App Documentation

### Overview

The Simple To-Do List App is a basic web application that allows users to create, edit, delete, and mark tasks as completed. The app is built using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.

### Features

1. **Task Management:**
   - **Add Task:** Users can add a new task with a title and an optional description.
   - **Edit Task:** Users can edit the title and description of existing tasks.
   - **Delete Task:** Users can delete tasks from the list.
   - **Task Completion:** Users can mark tasks as completed or active.

2. **Data Persistence:**
   - The app uses MongoDB to store tasks persistently.

3. **User Interface:**
   - The user interface is designed to be simple and intuitive.
   - Tasks are displayed with titles, descriptions, and completion status.
   - Completed tasks are visually differentiated for better clarity.

### Setup

To run the Simple To-Do List App locally, follow these steps:

1. **Install Dependencies:**
   - Ensure you have Node.js and npm installed on your machine.
   - Run `npm install` in the project directory to install the necessary Node.js packages.

2. **Start MongoDB:**
   - Ensure MongoDB is installed and running on your machine.
   - Start MongoDB using the command `mongod`.

3. **Run the Server:**
   - Run the Node.js server using the command `node server.js`.

4. **Access the App:**
   - Open a web browser and go to `http://localhost:3000`.

### Usage

1. **Adding a Task:**
   - Enter the task title in the "Task Title" input field.
   - Optionally, provide a task description.
   - Click the "Add Task" button.

2. **Editing a Task:**
   - Click on the task title or description to edit them.
   - Make the necessary changes and press Enter.

3. **Completing a Task:**
   - Check the checkbox next to a task to mark it as completed.
   - Uncheck the checkbox to mark it as active.

4. **Deleting a Task:**
   - Click the "Delete" button next to a task to remove it from the list.

### Important Notes

- The app is designed for educational purposes and may lack certain features found in more complex task management applications.
- Ensure MongoDB is running before starting the Node.js server to enable data storage.

### Support and Issues

For support or reporting issues, please visit the [GitHub repository](https://github.com/your-username/your-repository) and create an issue.

### License

This Simple To-Do List App is open-source and released under the [MIT License](https://opensource.org/licenses/MIT).

Feel free to customize this documentation based on the specific details of your application and the structure of your code. Include any additional information that you think would be helpful for users and developers.
