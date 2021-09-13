import { makeAutoObservable } from "mobx";
import { TodoType } from "../types";

export class TodoStore {
  todos: TodoType[] = [
    {
      id: 1,
      text: 'To do todo',
      completed: false,
    },
    {
      id: 2,
      text: 'And learn React Native',
      completed: false,
    },
    {
      id: 3,
      text: 'And have fun =)',
      completed: false,
    },
    {
      id: 4,
      text: 'Check todos with very long long long text, its important, like, really really important',
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