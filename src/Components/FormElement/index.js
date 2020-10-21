import React, {useState} from 'react';

import './FormElement.css'

export default function FormElement({addTodo}) {
    const [Todo, setTodo] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if(!Todo) {
            return;
        }
        addTodo(Todo);
        setTodo("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={Todo}
                onChange={e => {
                    setTodo(e.target.value);
                    console.log(`Value: ${e.target.value}`);
                    console.log(`Todo: ${Todo}`)
                }}
                placeholder="Digite um To-do"
            />
        </form>
    );
}