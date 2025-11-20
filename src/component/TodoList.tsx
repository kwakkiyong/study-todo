import TodoListItemEmpty from "./TodoListItemEmpty.tsx";
import TodoListItem from "./TodoListItem.tsx";
import {useTodoStore} from "../store/todoStore.ts";

export default function TodoList() {
    const todos = useTodoStore((state) => state.todos);

    return (
        <ul className="todo__list">
            {/* 할 일 목록이 없는 경우 */}
            {todos.length === 0 && <TodoListItemEmpty/>}

            {/* 할 일 목록이 있을 때 */}
            {todos.length !== 0 && (
                todos.map((todo) => <TodoListItem key={todo.id} todo={todo}/>)
            )}
        </ul>
    );
}