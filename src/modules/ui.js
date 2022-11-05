import Task from './task.js';
import TodoList from './todo-list';
import Storage from './storage.js';
export default class UI {
  constructor() {
    this.storage = new Storage();
  }
  // Display Lists
  // Add Lists
  // Remove Lists
  // Display Tasks
  // Remove Tasks
  load() {
    this.createExamples();
    //UI.addListButton();
    this.displayTodoContent();
  }

  loadProjects() {}

  static createTodoList() {
    const todoListDiv = document.createElement('div');
    todoListDiv.classList.add('list');
    const title = todoList.getName();
    todoListDiv.textContent = title;

    // Should this happen here? 
    // Should createTodoList just add a list to the 
    // storage and then display them through the storage?
    todoListDiv.addEventListener('click', () => {
      //UI.displayTodoContent(todoList);
    });
    return todoListDiv;
  }

  static addListButton() {
    const addListBtn = document.getElementById('addListButton');
    addListBtn.addEventListener('click', () => {
      this.clearTasksSection();
      const lists = document.getElementById('lists');
      /** Most Likely not necessary
      while (lists.firstChild) {
        lists.removeChild(lists.firstChild);
      }
      */

      lists.innerHTML = `
      <div id="newList">
        <input type="textfield" id="title" name="title" placeholder="TITLE">
        <input type="textfield" id="description" name="description" placeholder="DESCRIPTION">
        <select id="priority" name="priority">
          <option value="" disabled selected>PRIORITY</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <label for="dueDate">Due Date:
        <input type="date" name="dueDate", id="dueDate">
        </label>
        <div class="buttons">
          <button class="submit-list-button" id="submitListButton">Add List</button>
          <button class="cancel-list-button" id="cancelListButton">Cancel</button>
        </div>
      </div>
      `;

      const submitListButton = document.getElementById('submitListButton');
      submitListButton.addEventListener('click', () => {
        const newList = this.createTodoList();
        this.storage.storeList(newList);
      });
    });
  }

  //static displayTodoContent() {
  displayTodoContent() {
    UI.clearTasksSection();
    const lists = document.getElementById('lists');
    this.storage.getLists().forEach((list) => {
      const listDiv = document.createElement('div');
      listDiv.textContent = list.getName();
      listDiv.classList.add('list');
      lists.appendChild(listDiv);
    })
  }
  // Should just loop through some storage and show 
  // like: storage.forEach(todoList, displayTodoContent(todoList))
  /*static displayTodoContent(todoList) {
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
        btn.parentElement.parentElement.remove(); // WORKS!
        todoList.deleteTask(todoList.getName()); // This needs to happen on storage level
      });
    });
  }
  */
  

  static clearTasksSection() {
    const lists = document.getElementById('listTasks');
    while (lists.firstChild) {
      lists.removeChild(lists.firstChild);
    }
  }

  /* 'Showcase Todo List' -> The list that's included when user loads the page */
  createExamples() {
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

    // lists.appendChild(UI.createTodoList(todoList));
    // lists.appendChild(UI.createTodoList(todoList2));

    this.storage.storeList(todoList);
    this.storage.storeList(todoList2);
    this.storage.printStorage();
  }
}
