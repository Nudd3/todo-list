export default class Task {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }

  getTitle() {
    return this.title;
  }

  setTitle(name){
    this.name = name;
  }

  getDescription(){
    return this.description;
  }

  getPriority(){
    return this.priority;
  }

  getDueDate(){
    return this.dueDate;
  }

  testFunction(){
    console.log('Hello from a task with name' + this.name);
  }
}