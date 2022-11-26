/** Replaces UI when finished */
/** Manages the relation between the page and the storage */
import Task from './task.js';
import TodoList from './todo-list';
import Storage from './storage.js';

export default class DomManager {

  static init() {
    console.log('hello');
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
    
    lists.appendChild(DomManager.createListDiv(exampleTodoList));
    /** End of testing */

  }

  static createListDiv(list) {
    
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

  static displayTasks() {}

  static createTaskDiv() {}

  static addTask() {}



  // Handlers
  static handleListListeners(list, listDiv) {
    // when a listDiv is pressed
    // - currently shown tasks should be removed
    // - its tasks should be shown
    // - the addNewTask btn should be shown
    // show add task button
    const taskSection = document.getElementById('listTasks');
    
    listDiv.addEventListener('click', () => {
      taskSection.innerHTML = '';

      // Display tasks
      list.getTasks().forEach(task => {
        const newTask = document.createElement('div');
        newTask.classList.add('list');
        newTask.textContent = task.getTitle();
        taskSection.appendChild(newTask);
      });

      // Display the add task button
      const addTaskButton = document.getElementById('addTaskButton');
      addTaskButton.classList.add('show');
      addTaskButton.addEventListener('click', () => {
        const newTaskModal = document.getElementById('modalContainer');
        newTaskModal.classList.add('showModal');
        // display add task modal
          // get data from page modal
          // create a new task
          // add to todoList
          // display to page
        console.log('hello oo');
      });

    });
  }


  static createExampleTodo() {
    const newTodoList = new TodoList('Clean!', 'Just do it!', 'none', 'none');
    const task1 = new Task('shower', 'has to be done', 'low', 'none');
    const task2 = new Task('toilet', 'discusting', 'high', 'none');
    newTodoList.addTask(task1);
    newTodoList.addTask(task2);
    return newTodoList;
  }

}
