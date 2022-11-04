import Task from './task.js';
import TodoList from './todo-list';
export default class UI {
  todoLists = [];

  static loadHomepage() {
    //loadProjects();
    UI.loadShowCase();
    UI.addListButton();
  }

  loadProjects() {}

  static getTodoContent() {
    // Read the inputs from the page and use them to create a TodoList
    // Then call createTodo with the new TodoList
  }

  static createTodoList(todoList) {
    const todoListDiv = document.createElement('div');
    todoListDiv.classList.add('list');
    const title = todoList.getName();
    todoListDiv.textContent = title;
    todoListDiv.addEventListener('click', () => {
      UI.displayTodoContent(todoList);
    });
    return todoListDiv;
  }

  static displayTodoContent(todoList) {
    UI.clearTasksSection();
    const lists = document.getElementById('listTasks');

    // Show the tasks
    todoList.getTasks().forEach((task) => {
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task');
      taskDiv.innerHTML = `
      <div class="task-title">${task.getTitle()}</div>
      <div>${task.getDescription()}</div>
      <div class="task-right">
        <div>${task.getPriority()}</div>
        <div>${task.getDueDate()}</div>
        <i class="fa-solid fa-trash-can delete"></i>
        <div><input type='checkbox'></div>
      </div>
      `;
      lists.appendChild(taskDiv);
    });

    // Add option to remove a task
    const removeTask = document.querySelectorAll('.delete');
    removeTask.forEach((btn) => {
      btn.addEventListener('click', () => {
        console.log('remove');
      });
    });
  }

  static addListButton() {
    const addListBtn = document.getElementById('addListButton');
    addListBtn.addEventListener('click', () => {
      const lists = document.getElementById('lists');
      while (lists.firstChild) {
        lists.removeChild(lists.firstChild);
      }
      lists.innerHTML = `
      <div id="newList">
        <input type="textfield" placeholder="TITLE">
        <input type="textfield" placeholder="DESCRIPTION">
        <select id="priority" name="priority">
          <option value="" disabled selected>PRIORITY</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button class="submit-list-button" id="submitListButton">Add List</button>
      </div>
      `;

      const submitListButton = document.getElementById('submitListButton');
      submitListButton.addEventListener('click', () => {
        alert('hello')
      })

    });
  }

  static clearTasksSection() {
    const lists = document.getElementById('listTasks');
    while (lists.firstChild) {
      lists.removeChild(lists.firstChild);
    }
  }

  /* 'Showcase Todo List' -> The list that's included when user loads the page */
  static loadShowCase() {
    const lists = document.getElementById('lists');
    const todoList = new TodoList('Shopping (Example)');
    const task1 = new Task('Avocados', 'I really need them!', 'High', 'none');
    const task2 = new Task('Milk', 'For my cereal addiction', 'High', 'none');
    todoList.addTask(task1);
    todoList.addTask(task2);

    const todoList2 = new TodoList('Cleaning (Example)');
    const tasks1 = new Task('Bathroom', 'I really need them!', 'High', 'none');
    const tasks2 = new Task(
      'Kitchen',
      'For my cereal addiction',
      'High',
      'none'
    );
    todoList2.addTask(tasks1);
    todoList2.addTask(tasks2);

    lists.appendChild(UI.createTodoList(todoList));
    lists.appendChild(UI.createTodoList(todoList2));
  }
}
