import React, { useState } from "react";

import './Todo.css';

import FormElement from './Components/FormElement';
import TodoElement from './Components/TodoElement';

export default function Todo() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('list_todos')) || []);

    function handleAddTodo(todo) {
        const AddTodos = [...todos, { todo }];
        setTodos(AddTodos);
        saveToStorage();
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
        saveToStorage();
    }

    function deleteTodo(index) {
        const deletedTodos = [...todos];
        deletedTodos.splice(index, 1);
        setTodos(deletedTodos);
        saveToStorage();
    };

    function saveToStorage(){
        localStorage.setItem('list_todos', JSON.stringify(todos));
    }

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
                    saveToStorage={saveToStorage}   
                />
        ))}
        <FormElement addTodo={handleAddTodo} saveToStorage={saveToStorage}/>
      </div>
        </div>
    );
}