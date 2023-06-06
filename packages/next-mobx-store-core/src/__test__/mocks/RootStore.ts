import TodoStore from "./TodoStore";

export default class RootStore {
  todoStore: TodoStore;
  constructor() {
    this.todoStore = new TodoStore();
  }
}
