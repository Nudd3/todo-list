export default class TodoList {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  getTitle() {
    return this.title;
  }

  setTitle(value){
    this.title = value;
  }

  getTasks() {
    return this.tasks;
  }

  setTasks(value){
    this.tasks = value;
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  deleteTask(taskTitle) {
    this.tasks = this.tasks.filter((task) => task.title !== taskTitle);
  }

  nrOfTasks(){
    return this.tasks.length;
  }

  toString() {
    const output = '';
    this.tasks.forEach(task => {
      output += `Title: ${task.getTitle()}, `;
      output += `Prio: ${task.getPriority()}, \n`;
    })
    return output;
  }
}