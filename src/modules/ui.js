import Task from './task.js';
import TodoList from './todo-list';
import Storage from './storage.js';
export default class UI {

  // Display Lists
  // Add Lists
  // Remove Lists
  // Display Tasks
  // Remove Tasks
  load() {
    this.storage = new Storage();
    this.createExamples();
    //UI.addListButton();
    this.displayTodoLists();
    this.addListButton();
  }

  //static createTodoList() {
  createTodoList() {
    // Get the values from the input fields
    // Then create a todo from it
    // lastly, add it to the storage.
    const todoListDiv = document.createElement('div');
    todoListDiv.classList.add('list');

    /* create the list below*/ 
    // 1. get values from page
    const listTitle = document.getElementById('listTitle').value;

    const newTodoList = new TodoList(listTitle);
    this.storage.storeList(newTodoList);
    this.storage.printStorage();
  }

  displayTodoLists() {
    const lists = document.getElementById('lists');
    console.log('lists below');
    console.log(this.storage.getLists());
    this.storage.getLists().forEach((list) => {
      console.log(`typeof list: ${typeof list}`)
      const listDiv = document.createElement('div');
      listDiv.textContent = list.getName();
      listDiv.classList.add('list');
      listDiv.addEventListener('click', () => {
        this.displayListTasks(list);
      });
      lists.appendChild(listDiv);
    });
  }

  // working atm, still need to handle events on buttons on tasks
  displayListTasks(todoList) {
    this.clearTasksSection();
    const listTasks = document.getElementById('listTasks');

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
      listTasks.appendChild(taskDiv);
    });
  }

  addListButton() {
    const addListBtn = document.getElementById('addListButton');
    addListBtn.addEventListener('click', () => {
      this.clearTasksSection();
      const lists = document.getElementById('lists');

      lists.innerHTML = `
      <div id="newList">
        <input type="textfield" id="listTitle" name="listTitle" placeholder="TITLE">
        <div class="buttons">
          <button class="submit-list-button" id="submitListButton">Add List</button>
          <button class="cancel-list-button" id="cancelListButton">Cancel</button>
        </div>
      </div>
      `;

      const submitListButton = document.getElementById('submitListButton');
      submitListButton.addEventListener('click', () => {
        this.createTodoList();
        //this.storage.storeList(newList);
        lists.innerHTML = '';
        this.displayTodoLists();
      });
      const cancelListButton = document.getElementById('cancelListButton');
      cancelListButton.addEventListener('click', () => {
        this.displayTodoLists();
      })
    });
  }

  clearTasksSection() {
    const lists = document.getElementById('listTasks');
    while (lists.firstChild) {
      lists.removeChild(lists.firstChild);
    }
  }

  /* 'Showcase Todo List' -> The list that's included when user loads the page */
  createExamples() {
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

    this.storage.storeList(todoList);
    this.storage.storeList(todoList2);
    this.storage.printStorage();
  }
}
