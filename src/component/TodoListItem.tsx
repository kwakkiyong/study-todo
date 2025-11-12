import Button from "./html/Button.tsx";
import Checkbox from "./html/Checkbox.tsx";
import SvgPencil from "./svg/SvgPencil.tsx";
import SvgClose from "./svg/SvgClose.tsx";
import {useState} from "react";
import Input from "./html/Input.tsx";

export default function TodoListItem({todo, toggleTodo, deleteTodo, modifyTodo}: {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    modifyTodo: (id: number, title: string) => void;
}) {
    const [isModify, setIsModify] = useState(false);
    const [modifyTitle, setModifyTitle] = useState('');

    const modifyHandler = () => {
        setIsModify(!isModify);
        setModifyTitle(modifyTitle === '' ? todo.title : modifyTitle);

        if (modifyTitle.trim() !== '' && modifyTitle !== todo.title) {
            modifyTodo(todo.id, modifyTitle);
        }
    };

    return (
        /* 할 일 목록이 있을 때 */
        <li className={`todo__item ${todo.done && 'todo__item--complete'}`}>
            {isModify ? (
                <Input type="text" className="todo__modify-input" value={modifyTitle}
                       onChange={(e) => setModifyTitle(e.target.value)}/>
            ) : (
                <Checkbox parentClassName='todo__checkbox-group' type="checkbox" className="todo__checkbox"
                          checked={todo.done} onChange={() => toggleTodo(todo.id)}>
                    {todo.title}
                </Checkbox>
            )}

            <div className="todo__button-group">
                <Button className="todo__action-button" onClick={modifyHandler}>
                    <SvgPencil/>
                </Button>
                <Button className="todo__action-button" onClick={() => deleteTodo(todo.id)}>
                    <SvgClose/>
                </Button>
            </div>
        </li>
    );
}