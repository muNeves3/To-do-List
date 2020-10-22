import React, { createContext, useState, useContext } from 'react';

const TodoContext = createContext();

export default function TodoProvider({ children }) {
    const [todo, setTodo] = useState([]);

    return(
        <TodoContext.Provider
        value={{
            todo,
            setTodo
        }}
        >
        {children}  
        </TodoContext.Provider>
    );
}

export function useTodo() {
    const context = useContext(TodoContext);
    if(!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    const { todo, setTodo } = context;
    return { todo, setTodo };
}