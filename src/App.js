import React from 'react';

import TodoProvider from './Context/Todo';
import Todo from './Todo';

export default function App() {
    return(
        <TodoProvider>
            <Todo />
         </TodoProvider>
    );
}