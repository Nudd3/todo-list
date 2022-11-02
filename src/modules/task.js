export default class Todo {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }

  testFunction(){
    console.log('Hello from a task with name' + this.name);
  }
}