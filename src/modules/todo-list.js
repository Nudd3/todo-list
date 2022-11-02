export default class TodoList {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  getName() {
    return this.name;
  }

  setName(value){
    this.name = value;
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

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }

  nrOfTasks(){
    return this.tasks.length;
  }
}