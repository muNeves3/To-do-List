import React from 'react';

import './FormElement.css'
import { useTodo } from '../../Context/Todo';

export default function FormElement({addTodo}) {
    const {todo, setTodo} = useTodo("");

    function handleSubmit(event) {
        event.preventDefault();
        if(!todo) {
            return;
        }
        addTodo(todo);
        setTodo("");
        localStorage.setItem('list_todos', JSON.stringify(todo));
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