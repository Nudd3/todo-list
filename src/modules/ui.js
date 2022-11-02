import Task from './task.js';
import TodoList from './todo-list';
export default class UI {
  static loadHomepage() {
    //loadProjects();
    UI.loadShowCase();
  }

  loadProjects() {}

  // 'Showcase Todo List' -> The list that's included when user loads the page
  static loadShowCase() {
    const lists = document.getElementById('lists');
    const todoList = new TodoList('Shopping');
    const task1 = new Task('Avocados', 'I really need them!', 'High', 'none');
    const task2 = new Task('Milk', 'For my cereal addiction', 'High', 'none');
    todoList.addTask(task1);
    todoList.addTask(task2);

    const todoList2 = new TodoList('Cleaning');
    const tasks1 = new Task('Bathroom', 'I really need them!', 'High', 'none');
    const tasks2 = new Task('Kitchen', 'For my cereal addiction', 'High', 'none');
    todoList2.addTask(tasks1);
    todoList2.addTask(tasks2);
 
    lists.appendChild(UI.createTodoList(todoList));
    lists.appendChild(UI.createTodoList(todoList2));
  }

  static createTodoList(todoList) {
    const todoListDiv = document.createElement('div');
    todoListDiv.classList.add('list');
    const title = todoList.getName();
    todoListDiv.textContent = title;
    //UI.addTaskInfo(todoList);
    todoListDiv.addEventListener('click', () => {
      UI.displayTodoContent(todoList);
    });
    return todoListDiv;
  }

  static displayTodoContent(todoList) {
    UI.clear();
    const lists = document.getElementById('listTasks');
    console.log(lists);
    todoList.getTasks().forEach(task => {
      
      const title = task.getTitle();
      const description = task.getDescription();
      const priority = task.getPriority();
      const dueDate = task.getDueDate();
      
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task');
      taskDiv.innerHTML = 
      `
        <div class="task-title">${title}</div>
        <div>${description}</div>
        <div>
          <div>${priority}</div>
          <div>${dueDate}</div>
          <i class="fa-solid fa-trash-can"></i>
        </div>
      `;
      console.log(taskDiv);
      lists.appendChild(taskDiv);
    });
  }

  static clear(){
    const lists = document.getElementById('listTasks');
    while (lists.firstChild) {
      lists.removeChild(lists.firstChild);
    }
  }
}
