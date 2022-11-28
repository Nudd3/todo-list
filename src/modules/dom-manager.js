/** Replaces UI when finished */
/** Manages the relation between the page and the storage */
import Task from './task.js';
import TodoList from './todo-list';
import Storage from './storage.js';

export default class DomManager {
  static init() {
    DomManager.displayLists();
  }

  /** This method should only display lists from storage on load up
   *  New lists will be displayed after creation from addList
   */
  static displayLists() {
    /**
     * Read lists from storage
     * and call createListDiv with them as arguments
     */

    /** Below stuff are for testing */
    const lists = document.getElementById('lists');
    const exampleTodoList = DomManager.createExampleTodo();
    const exampleTodoList2 = DomManager.createExampleTodo2();

    lists.appendChild(DomManager.createListDiv(exampleTodoList));
    //lists.appendChild(DomManager.createListDiv(exampleTodoList2));
    /** End of testing */
  }
    
  static createListDiv(list) {
    // const currentList = Storage.getList(list)
    const listDiv = document.createElement('div');
    listDiv.classList.add('list');
    listDiv.textContent = list.getTitle();
    DomManager.handleListListeners(list, listDiv);

    return listDiv;
  }

  static addList() {
    // get list info from page
    // push list to storage
    // add list to page
  }

  static displayTasks(list) {
    const taskSection = document.getElementById('listTasks');
    taskSection.innerHTML = '';
    list.getTasks().forEach((task) => {
      const newTask = document.createElement('div');
      newTask.classList.add('task');
      newTask.textContent = task.getTitle();
      taskSection.appendChild(newTask);
    });
  }

  static createTask(taskInfo, list) {

    const newTask = new Task(taskInfo.title, taskInfo.description, taskInfo.priority, taskInfo.dueDate);
    list.addTask(newTask);
    //DomManager.displayTasks(list);
    DomManager.printTasks(list);
  }

  /** Should probably aim at a more clean approach on this method
   * Maybe divide the different things into separate methods!
   */
  static handleModalButtons(list) {

    // When 'cancel' button is pressed: clear the modal and remove it
    // from the page
    const newTaskModal = document.getElementById('modalContainer');
    const cancelTaskButton = document.getElementById('cancelNewTaskButton');
    cancelTaskButton.addEventListener('click', () => {
      
      newTaskModal.classList.remove('showModal');
    });

    const addTaskButton = document.getElementById('submitNewTaskButton');
    addTaskButton.addEventListener('click', () => {
      const taskInfo = DomManager.collectTaskInfo();
      if (taskInfo === false) return;
      DomManager.createTask(taskInfo, list);
      newTaskModal.classList.remove('showModal');
    });
    // When the 'add task' button is pressed:
    // [x] get task information from page,
    // [x] create a new task
    // [x] add to todoList
    // display to page
    // (save todoList)
  }

  // Handlers
  static handleListListeners(list, listDiv) {
    const taskSection = document.getElementById('listTasks');

    listDiv.addEventListener('click', () => {
      taskSection.innerHTML = '';

      // Display tasks
      DomManager.displayTasks(list);

      // Display the add task button
      const addTaskButton = document.getElementById('addTaskButton');
      addTaskButton.classList.add('show');

      addTaskButton.addEventListener('click', () => {
        const newTaskModal = document.getElementById('modalContainer');
        // display add task modal
        newTaskModal.classList.add('showModal');

        DomManager.handleModalButtons(list);
        
        // get data from page modal
        // create a new task
        // add to todoList
        // display to page
      });
    });
  }

  static collectTaskInfo() {
    const taskTitle = document.getElementById('taskTitle').value
    const taskDescription = document.getElementById('taskDescription').value
    const taskPriority = document.getElementById('taskPriority').value
    const taskDueDate = document.getElementById('taskDueDate').value
    DomManager.clearModal();
    if (taskTitle == '' || taskDescription == '' || taskPriority == '' || taskDueDate == ''){
      return false;
    }
    return {
      title: taskTitle,
      description: taskDescription,
      priority: taskPriority,
      dueDate: taskDueDate,
    };
  }

  static createExampleTodo() {
    const newTodoList = new TodoList('Clean!', 'Just do it!', 'none', 'none');
    const task1 = new Task('shower', 'has to be done', 'low', 'none');
    const task2 = new Task('toilet', 'discusting', 'high', 'none');
    newTodoList.addTask(task1);
    newTodoList.addTask(task2);

    return newTodoList;
  }

  static createExampleTodo2() {
    const newTodoList = new TodoList('Cook!', 'Im Hungry!', 'none', 'none');
    const task1 = new Task('Onions', 'has to be done', 'low', 'none');
    const task2 = new Task('Minced Meat', 'good', 'high', 'none');
    newTodoList.addTask(task1);
    newTodoList.addTask(task2);

    return newTodoList;
  }

  static clearModal() {
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskPriority').value = 'Priority';
    document.getElementById('taskDueDate').value = 'DueDate';
  }

  static printTasks(list){
    list.getTasks().forEach(task => {
      console.log(task);
    })
  }
}
