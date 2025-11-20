import TodoHeader from "./component/TodoHeader.tsx";
import TodoEditor from "./component/TodoEditor.tsx";
import TodoList from "./component/TodoList.tsx";

function App() {
    return (
        <div className="todo">
            {/* 헤더 */}
            <TodoHeader/>

            {/* 할 일 등록 Form */}
            <TodoEditor />

            {/* 할 일 목록 */}
            <TodoList />
        </div>
    );
}

export default App
