import React, { useState } from 'react';
import { useTodo } from '../../Context/Todo';

import './FormElement.css'

export default function FormElement({addTodo}) {
    const [todo, setTodo] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        if(!todo) {
            return;
        }
        addTodo(todo);
        setTodo("");
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