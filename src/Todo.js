import React from "react";

import './Todo.css';

import FormElement from './Components/FormElement';
import TodoElement from './Components/TodoElement';
import { useTodo } from './Context/Todo';

export default function Todo() {
    const {todo, setTodo}= useTodo(JSON.parse(localStorage.getItem('list_todos')) ||[]);

    function handleAddTodo(todos) {
        const AddTodos = [...todo, { todos }];
        setTodo(AddTodos);
        saveToStorage();
    }

    function handleDoTodo(index) {
        const doneTodos = [...todo];
        if(doneTodos[index].isCompleted === true) {
            doneTodos[index].isCompleted = false;
            setTodo(doneTodos);
            return;
        }
        doneTodos[index].isCompleted = true;
        setTodo(doneTodos);
        saveToStorage();
    }

    function deleteTodo(index) {
        const deletedTodos = [...todo];
        deletedTodos.splice(index, 1);
        setTodo(deletedTodos);
        saveToStorage();
    };

    function saveToStorage(){
        localStorage.setItem('list_todos', JSON.stringify(todo));
    }

    return(
            <div id="content">
                <div className="todo-list">
                {todo.map((todo, index) => (
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
