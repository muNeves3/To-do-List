import React, { useState } from "react";

import './Todo.css';

import FormElement from './Components/FormElement';
import TodoElement from './Components/TodoElement';

export default function Todo() {
    const [todos, setTodos] = useState([]);

    function handleAddTodo(todo) {
        const AddTodos = [...todos, { todo }];
        setTodos(AddTodos);
    }

    function handleDoTodo(index) {
        const doneTodos = [...todos];
        if(doneTodos[index].isCompleted === true) {
            doneTodos[index].isCompleted = false;
            setTodos(doneTodos);
            return;
        }
        doneTodos[index].isCompleted = true;
        setTodos(doneTodos);
    }

    function deleteTodo(index) {
        const deletedTodos = [...todos];
        deletedTodos.splice(index, 1);
        setTodos(deletedTodos);
      };

    return(
        <div id="content">
            <div className="todo-list">
             {todos.map((todo, index) => (
                <TodoElement
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={handleDoTodo}
                    removeTodo={deleteTodo}
                />
        ))}
        <FormElement addTodo={handleAddTodo} />
      </div>
        </div>
    );
}