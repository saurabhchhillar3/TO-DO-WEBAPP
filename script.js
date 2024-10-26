let pendingTasks = [];
let completedTasks = [];

function renderTasks() {
  const pendingTasksContainer = document.getElementById('pending-tasks');
  const completedTasksContainer = document.getElementById('completed-tasks');
  
  pendingTasksContainer.innerHTML = '';
  completedTasksContainer.innerHTML = '';

  pendingTasks.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `
      ${task.text}
      <div class="actions">
        <button class="complete-btn" onclick="markAsCompleted(${index})">Complete</button>
        <button class="delete-btn" onclick="deleteTask(${index}, 'pending')">Delete</button>
      </div>
    `;
    pendingTasksContainer.appendChild(taskElement);
  });

  completedTasks.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('completed');
    taskElement.innerHTML = `
      ${task.text}
      <div class="actions">
        <button class="delete-btn" onclick="deleteTask(${index}, 'completed')">Delete</button>
      </div>
    `;
    completedTasksContainer.appendChild(taskElement);
  });
}

function addTask() {
  const newTaskInput = document.getElementById('new-task');
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    pendingTasks.push({ text: taskText });
    newTaskInput.value = '';
    renderTasks();
  }
}

function markAsCompleted(index) {
  const task = pendingTasks.splice(index, 1)[0];
  completedTasks.push(task);
  renderTasks();
}

function deleteTask(index, list) {
  if (list === 'pending') {
    pendingTasks.splice(index, 1);
  } else {
    completedTasks.splice(index, 1);
  }
  renderTasks();
}

renderTasks();
