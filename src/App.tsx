import TodoHeader from "./component/TodoHeader.tsx";
import TodoEditor from "./component/TodoEditor.tsx";
import TodoList from "./component/TodoList.tsx";
import {useCallback, useEffect, useState} from "react";

function App() {
    const [todos, setTodos] = useState<Todo[]>(() =>
        JSON.parse(localStorage.getItem('todos') || '[]'));

    // Add(할 일 추가) 버튼 클릭
    const addTodo = (title: string) => {
        setTodos((todos) => [
            ...todos,
            {
                id: new Date().getTime(),
                title,
                done: false,
            },
        ]);
    };

    // 체크박스(할 일 완료 처리) 클릭
    const toggleTodo = useCallback((id: number) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? {...todo, done: !todo.done} : todo
            )
        )
    }, []);

    // X(할 일 삭제) 버튼 클릭
    const deleteTodo = useCallback((id: number) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, []);

    // 수정 사항 반영
    const modifyTodo = useCallback((id: number, title: string) => {
        setTodos((todos) =>
            todos.map((todo) => (todo.id === id ? {...todo, title: title} : todo))
        );
    }, []);

    // 할 일 등록시 localStorage 에 저장
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
        <div className="todo">
            {/* 헤더 */}
            <TodoHeader/>

            {/* 할 일 등록 Form */}
            <TodoEditor addTodo={addTodo}/>

            {/* 할 일 목록 */}
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} modifyTodo={modifyTodo}/>
        </div>
    );
}

export default App
