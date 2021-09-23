import { useMemo } from 'react'
import { TodoStore } from './todo-store';

export const todosForCategorySelector =
  (categoryId: number) => (store: TodoStore) => {
    const todosForCategory = useMemo(() => store.todos
      .filter((todo) => todo.categoryId === categoryId), [categoryId]);
    return todosForCategory;
  };
