document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const taskTitle = document.getElementById('taskTitle').value;
      const taskPriority = document.getElementById('taskPriority').value;
      const taskStatus = document.querySelector('input[name="taskStatus"]:checked').value;
      
      if (taskTitle && taskPriority && taskStatus) {
        const task = {
          title: taskTitle,
          priority: taskPriority,
          status: taskStatus
        };
        
        addTaskToList(task);
        taskForm.reset();
      }
    });
    
    function addTaskToList(task) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="${task.status === 'completed' ? 'completed' : ''}">${task.title} - ${task.priority}</span>
        <button class="remove-btn">Remove</button>
        <button class="complete-btn">Mark as ${task.status === 'completed' ? 'Pending' : 'Complete'}</button>
      `;
      
      taskList.appendChild(li);
      
      const removeBtn = li.querySelector('.remove-btn');
      removeBtn.addEventListener('click', function() {
        li.remove();
      });
      
      const completeBtn = li.querySelector('.complete-btn');
      completeBtn.addEventListener('click', function() {
        if (task.status === 'completed') {
          task.status = 'pending';
          li.querySelector('span').classList.remove('completed');
          completeBtn.textContent = 'Mark as Complete';
        } else {
          task.status = 'completed';
          li.querySelector('span').classList.add('completed');
          completeBtn.textContent = 'Mark as
        }