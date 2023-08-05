document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('todo-form');
  let list = document.getElementById('list');

  // Add Task
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let rmvBtn = document.createElement('button');
    rmvBtn.innerText = 'DEL';

    let newTodo = document.createElement('li');
    newTodo.innerText = document.getElementById('task').value;

    list.appendChild(newTodo);
    newTodo.appendChild(rmvBtn);

    form.reset();
  });

  // Remove Task
  list.addEventListener("click", (e) => {
    const targetTagToLowerCase = e.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
      e.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === "button") {
      e.target.parentNode.remove();
    }
  });
});


