import { makeAutoObservable } from "mobx";
import { TodoType } from "../types";

export class TodoStore {
  todos: TodoType[] = [
    {
      id: 1,
      text: 'test',
      completed: false,
    },
    {
      id: 2,
      text: 'test',
      completed: false,
    },
    {
      id: 3,
      text: 'test',
      completed: false,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(newTodoText: string) {
      const newTodo = {
        id: this.todos.length + 1,
        text: newTodoText,
        completed: false,
      };

      this.todos.push(newTodo);
  }

  completeTodo(id: number) {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index > -1) {
      this.todos[index].completed = !this.todos[index].completed;
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}