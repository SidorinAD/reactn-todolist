import { useContext } from "react";
import { TodoContext } from "../../App";

export const useTodoStore = () => {
    const TodoStore = useContext(TodoContext)
    return {
        TodoStore: TodoStore
    }
}