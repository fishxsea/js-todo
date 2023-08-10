document.addEventListener('DOMContentLoaded', () => {
	let form = document.getElementById('todo-form');
	let list = document.getElementById('list');

	// Add Task
	const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		let rmvBtn = document.createElement('button');
		rmvBtn.innerText = 'DEL';

		let newTodo = document.createElement('li');
		newTodo.innerText = document.getElementById('task').value;

		list.appendChild(newTodo);

		savedTodos.push({ task: newTodo.innerText, isCompleted: false });
		localStorage.setItem('todos', JSON.stringify(savedTodos));
		form.reset();
		newTodo.appendChild(rmvBtn);
	});

	// Remove Task
	list.addEventListener('click', (e) => {
		const targetTagToLowerCase = e.target.tagName.toLowerCase();
		if (targetTagToLowerCase === 'li') {
			e.target.style.textDecoration = 'line-through';
		} else if (targetTagToLowerCase === 'button') {
			e.target.parentNode.remove();
		}
	});
});

// document.addEventListener('DOMContentLoaded', () => {
// 	const taskInput = document.getElementById('taskInput');
// 	const addTaskBtn = document.getElementById('addTaskBtn');
// 	const taskList = document.getElementById('taskList');

// 	// Load tasks from local storage when the page loads
// 	const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
// 	savedTasks.forEach((task) => createTaskElement(task));

// 	addTaskBtn.addEventListener('click', () => {
// 		const newTask = taskInput.value.trim();
// 		if (newTask !== '') {
// 			savedTasks.push(newTask);
// 			localStorage.setItem('tasks', JSON.stringify(savedTasks));
// 			createTaskElement(newTask);
// 			taskInput.value = '';
// 		}
// 	});

// 	function createTaskElement(taskText) {
// 		const taskItem = document.createElement('li');
// 		taskItem.textContent = taskText;

// 		const removeButton = document.createElement('button');
// 		removeButton.textContent = 'Remove';
// 		removeButton.addEventListener('click', () => {
// 			const taskIndex = savedTasks.indexOf(taskText);
// 			if (taskIndex > -1) {
// 				savedTasks.splice(taskIndex, 1);
// 				localStorage.setItem('tasks', JSON.stringify(savedTasks));
// 				taskItem.remove();
// 			}
// 		});

// 		taskItem.appendChild(removeButton);
// 		taskList.appendChild(taskItem);
// 	}
// });
