import TodoList from "./todo-list";

export default class Storage {

  static save(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  static loadLists() {

  }
}