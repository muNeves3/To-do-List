import React from 'react';

import { IoIosTrash} from 'react-icons/io';

import './TodoElement.css'

export default function TodoElement({ todo, index, completeTodo, removeTodo, editTodo }) {
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return(
        <div className="todo"
            style={{opacity: todo.isCompleted === true ? "0.3" : "1"}}
        >
            <div className="lateral-bar" style={{background: getRandomColor()}}></div>
            <h3 className="text">
            {todo.todo}
            </h3>
            <div className="changes">
                <input type="checkbox" onChange={() => completeTodo(index)} value={todo.isCompleted}/>
                <IoIosTrash onClick={() => removeTodo(index)}/>
            </div>
        </div>
    );
}
