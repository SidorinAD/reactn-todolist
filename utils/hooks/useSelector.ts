import { TodoStore } from "../../store";
import { useTodoStore } from './useTodoStore'

type SelectorFn<T = unknown> = (store: TodoStore) => T

export const useSelector = <T = unknown>(selectorFn: SelectorFn<T>) => {
  const { TodoStore } = useTodoStore();

  return selectorFn(TodoStore);
}
