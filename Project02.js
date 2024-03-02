<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Task List</h1>
        <form id="taskForm">
            <input type="text" id="taskTitle" placeholder="Enter task title" required>
            <select id="taskPriority">
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
            </select>
            <input type="radio" id="statusPending" name="taskStatus" value="pending" checked>
            <label for="statusPending">Pending</label>
            <input type="radio" id="statusCompleted" name="taskStatus" value="completed">
            <label for="statusCompleted">Completed</label>
            <button type="submit">Add Task</button>
        </form>
        <ul id="taskList"></ul>
    </div>

    <script src="script.js"></script>
</body>
</html>
