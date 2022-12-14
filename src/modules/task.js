export default class Task {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.complete = false;
  }

  getTitle() {
    return this.title;
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

  getCompleted(){

  }

  toggleCompleted() {
    this.complete = this.complete === false ? true : false;
  }
  setComplete(){
    this.complete = true;
  }
}