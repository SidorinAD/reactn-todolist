import { useMemo } from 'react'
import { TodoStore } from './todo-store';

export const todosForCategorySelector =
  (categoryId: number) => (store: TodoStore) => {
    const todosForCategory = store.todos
      .filter((todo) => todo.categoryId === categoryId);

    return todosForCategory;
  };
