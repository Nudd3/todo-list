import Task from './task.js';
import TodoList from './todo-list';
import Storage from './storage.js';
export default class UI {

  /******* */
  // RECREATE THIS SHIT! 
  // START WITH STORAGE IMMEDIATELY
  /******* */

  load() {
    this.storage = new Storage();
    this.createExamples();
    this.handleLists();
    this.initializeAddButtons();
  }

  handleLists() {
    //this.createTodoList();
    this.loadTodoLists();
    //this.displayTodoLists();
    // create lists
    // display lists
    // handle new list button
  }

  /* TODOLISTSTUFF*/
  /** Working 100% */
  // Get the title from the page, create a new list and add to storage
  createTodoList() {
    const todoListDiv = document.createElement('div');
    todoListDiv.classList.add('list');

    const listTitle = document.getElementById('listTitle').value;

    this.storage.storeList(new TodoList(listTitle));
  }


  // Loop through the storage and display each list
  //displayTodoLists() {
  loadTodoLists() {
    const lists = document.getElementById('lists');
    this.storage.getLists().forEach((list) => {
      console.log(`typeof list: ${typeof list}`);
      const listDiv = document.createElement('div');
      listDiv.textContent = list.getName();
      listDiv.classList.add('list');
      listDiv.addEventListener('click', () => {
        this.handleListTasks(list);
      });
      lists.appendChild(listDiv);
    });

    // handle TodoListTasks:
    // display tasks
    // handle adding new tasks
  }

  /** Working 100% */
  // This button is always shown
  handleAddListButton() {
    const addListBtn = document.getElementById('addListButton');
    addListBtn.addEventListener('click', () => {
      this.clearTasksSection();
      const lists = document.getElementById('lists');
      const addTaskButton = document.getElementById('addTaskButton');
      addTaskButton.classList.remove('show');
      lists.innerHTML = `
      <div id="newList">
        <input type="textfield" id="listTitle" name="listTitle" required placeholder="TITLE">
        <div class="buttons">
          <button class="add-btn" id="submitListButton">Add List</button>
          <button class="cancel-btn" id="cancelListButton">Cancel</button>
        </div>
      </div>
      `;

      this.handleNewListButtons();
    });
  }

  handleNewListButtons() {
    const submitListButton = document.getElementById('submitListButton');
    submitListButton.addEventListener('click', () => {
      this.createTodoList();
      lists.innerHTML = '';
      this.loadTodoLists();
    });

    const cancelListButton = document.getElementById('cancelListButton');
    cancelListButton.addEventListener('click', () => {
      lists.innerHTML = '';
      this.loadTodoLists();
    });
  }

  /* TASK STUFF */
  handleListTasks(list) {
    this.displayListTasks(list);
    this.handleAddTaskButton(list);
    // create tasks
    // display tasks
    // handle new task button
    // handle new task modal
  }

  // Working atm, still need to handle events on buttons on tasks
  // Probably where the addtaskstuff should live
  displayListTasks(todoList) {
    this.clearTasksSection();
    const listTasks = document.getElementById('listTasks');
    const addTaskButton = document.getElementById('addTaskButton');
    addTaskButton.classList.add('show');
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

  handleAddTaskButton(list) {
    const addTaskButton = document.getElementById('addTaskButton');
    addTaskButton.addEventListener('click', () => {
      this.displayAddTask(list);
      this.displayListTasks(list);
    });
  }

  displayAddTask(list) {
    const modalContainer = document.getElementById('modalContainer');
    modalContainer.classList.add('showModal');
    this.initModalButtons(list);
  }

  initModalButtons(list) {
    const submitTaskButton = document.getElementById('submitNewTaskButton');
    const cancelTaskButton = document.getElementById('cancelNewTaskButton');
    // TODO! Add the listeners to the buttons! //
    submitTaskButton.addEventListener('click', () => {
      this.createTask(list);
    });

    cancelTaskButton.addEventListener('click', () => {
      console.log('cancel');
      const modalContainer = document.getElementById('modalContainer');
      modalContainer.classList.remove('showModal');
    });
  }

  createTask(list) {
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const listTasks = document.getElementById('listTasks');
    const newTask = new Task(taskName, taskDescription, 'high', '++');
    list.addTask(newTask);
    const newTaskDiv = document.createElement('div');
    newTaskDiv.textContent = 'hello';
    listTasks.appendChild(newTaskDiv);
    // This is where I need to add the task to the actual TodoList.
    // And then use displayListTasks(todoList) on that list
    // So somehow I need the 'current' taskList to be carried into this method
    // to then be used as argument to displayListTasks..
    // Hide the modal after adding the task
    const modalContainer = document.getElementById('modalContainer');
    modalContainer.classList.remove('showModal');
  }

  initializeAddButtons() {
    this.handleAddListButton();
    this.handleAddTaskButton();
  }

  /** Utility functions */
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
  }
}
