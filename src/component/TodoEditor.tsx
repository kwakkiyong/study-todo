import Input from "./html/Input.tsx";
import Button from "./html/Button.tsx";
import {useState} from "react";

export default function TodoEditor({addTodo}: { addTodo: (title: string) => void; }) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!text.trim()) {
            return;
        }

        addTodo(text);
        setText('');
    };

    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            <div className="todo__editor">
                <Input
                    type="text"
                    value={text}
                    className="todo__input"
                    placeholder="Enter Todo List"
                    onChange={(e) => setText(e.target.value)}
                />
                <Button className="todo__button" type="submit">Add</Button>
            </div>
        </form>
    );
}