import { makeAutoObservable } from "mobx";
import { Todo, Category } from "../types";

export class TodoStore {
  todos: Todo[] = [
    
  ];

  categories: Category[] = [
    
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addCategory(newCategoryTitle: string) {
    const newCategory = {
      id: this.categories.length + 1,
      title: newCategoryTitle
    };
    this.categories.push(newCategory);
  }

  addTodo(newTodoText: string, categoryId: number) {
    const newTodo = {
      id: this.todos.length + 1,
      text: newTodoText,
      completed: false,
      date: new Date().toLocaleString(),
      categoryId
    };

    this.todos.push(newTodo);
  }

  addCashedTodos(jsonValue: any) {
    this.todos = [...this.todos, ...jsonValue];
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