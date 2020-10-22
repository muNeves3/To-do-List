import React, { useState } from 'react';

import './FormElement.css'

export default function FormElement({addTodo, saveToStorage}) {
    const [todo, setTodo] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        if(!todo) {
            return;
        }
        addTodo(todo);
        setTodo("");
        saveToStorage();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={todo}
                onChange={e => {
                    setTodo(e.target.value);
                    console.log(`Value: ${e.target.value}`);
                    console.log(`Todo: ${todo}`)
                }}
                placeholder="Digite um To-do"
            />
        </form>
    );
}