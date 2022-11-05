export default class Storage {
  // THIS IS WHERE I WILL STORE ALL THE LISTS!
  constructor() {
    this.storage = [];
  }

  storeList(todoList) {
    this.storage.push(todoList)
  }

  deleteList(todoList) {
    
  }

  getLists() {
    return this.storage;
  }

  // testing purposes
  printStorage() {
    this.storage.forEach(element => {
      console.log(element);
    });
  }
}