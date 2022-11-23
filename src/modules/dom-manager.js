/** Replaces UI when finished */
/** Manages the relation between the page and the storage */
import Task from './task.js';
import TodoList from './todo-list';
import Storage from './storage.js';

export default class DomManager {
  /** This method should only display lists from storage on load up
   *  New lists will be displayed after creation from addList
   */
  static displayLists() {
    const lists = document.getElementById('lists');
    const newTodoList = new TodoList('Clean!', 'Just do it!', 'none', 'none');
    lists.appendChild(this.createListDiv(newTodoList));
  }

  static createListDiv(list) {
    
    const listDiv = document.createElement('div');
    listDiv.classList.add('list');
    listDiv.textContent = list.getTitle();
    // handle listeners(listDiv, list);
    // when a listDiv is pressed
    // - its tasks should be shown
    // - the addNewTask btn should be shown
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
}
